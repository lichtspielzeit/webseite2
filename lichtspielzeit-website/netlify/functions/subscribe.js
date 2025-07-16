// Netlify Function für Mailchimp Newsletter-Anmeldung
exports.handler = async (event, context) => {
  // CORS Headers für alle Requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Nur POST-Requests erlauben
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email } = JSON.parse(event.body);

    // E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Ungültige E-Mail-Adresse' }),
      };
    }

    // Mailchimp API-Konfiguration
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // z.B. "us1"

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Mailchimp-Konfiguration fehlt');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server-Konfigurationsfehler' }),
      };
    }

    // Mailchimp API-Request
    const mailchimpUrl = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
    
    const mailchimpData = {
      email_address: email,
      status: 'subscribed', // oder 'pending' für Double-Opt-In
      tags: ['Lichtspielzeit', 'E-Book-Download'],
      merge_fields: {
        SOURCE: 'Website',
        SIGNUP_DATE: new Date().toISOString().split('T')[0]
      }
    };

    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailchimpData),
    });

    const responseData = await response.json();

    if (response.ok) {
      // Erfolgreiche Anmeldung
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true, 
          message: 'Erfolgreich angemeldet!',
          email: email 
        }),
      };
    } else if (response.status === 400 && responseData.title === 'Member Exists') {
      // E-Mail bereits registriert
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          success: true, 
          message: 'Du bist bereits angemeldet!',
          email: email 
        }),
      };
    } else {
      // Mailchimp-Fehler
      console.error('Mailchimp-Fehler:', responseData);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Anmeldung fehlgeschlagen. Bitte versuche es später noch einmal.' 
        }),
      };
    }

  } catch (error) {
    console.error('Newsletter-Anmeldung Fehler:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es später noch einmal.' 
      }),
    };
  }
};

