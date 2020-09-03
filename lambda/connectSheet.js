const fs = require("fs");
const readline = require("readline");
const {google} = require("googleapis");

// If modifying these scopes, delete token1.json.
const SCOPES = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive"
];
// The file token1.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "./token.json";
const spreadsheetId = "12oIEFMuWdxlNk33eu5pIIZdWaciPpO4690664-RJYL4";
let oAuth2ClientCredentials = {
    "web": {
        "client_id": "766114505242-pik26njk37032nu3qkhq7ucrjsi8o66v.apps.googleusercontent.com",
        "project_id": "original-dryad-283810",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "WJpQL5VhoP82TeuOkzaoRFj-",
        "redirect_uris": [
            "https://dhome.thecodewolves.com"
        ]
    }
};
// Load client secrets from a local file.
authorize(
oAuth2ClientCredentials
    , listMajors);

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );
    //
    // // Check if we have previously stored a token.
    // fs.readFile(TOKEN_PATH, (err, token) => {
    //     if (err) return getNewToken(oAuth2Client, callback);
    // });
    oAuth2Client.setCredentials({
            "access_token": "ya29.a0AfH6SMAwC1YBmJY2LVdEm2EAM1x3GzW9td_fozwnlyvaqFAoPCwEdt07z2hmT1CvWYvfTwk1idICmX9mY-VrvevZzB_EVRvt0DJ3MCMhTxMsWCyCbtYhmtTvv8NG1UKgxDCMVPKYFnwLvZFu86BsQavV6-fTZwPggX8",
            "refresh_token": "1//0gcsvAzprX7MJCgYIARAAGBASNwF-L9Ir3zW5pMjyAlUvS49oKydOQVS8AsMu9zNlMw8HZpquhqDXgq8xhqVFwXNBQ8t4xOUnFQA",
            "scope": "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets",
            "token_type": "Bearer",
            "expiry_date": 1595160542875
        }
    );
    callback(oAuth2Client);
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES
    });
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter the code from that page here: ", code => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err)
                return console.error(
                    "Error while trying to retrieve access token",
                    err
                );
            oAuth2Client.setCredentials(token);
            // Store the token tTOKEN_PATHo disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
                if (err) return console.error(err);
                console.log("Token stored to", TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
    const sheets = google.sheets({version: "v4", auth});
    sheets.spreadsheets.values.get(
        {
            spreadsheetId: spreadsheetId,
            range: "A1:H"
        },
        (err, res) => {
            if (err) return console.log("The API returned an error: " + err);
            const rows = res.data.values;
            if (rows.length) {
                // Print columns A and E, which correspond to indices 0 and 4.
            } else {
                console.log("No data found.");
            }
        }
    );
}

function addRecord(data, cB) {
    // Authorize a client with credentials, then call the Google Sheets API.
    authorize(oAuth2ClientCredentials

        , auth => {
            const sheets = google.sheets({version: "v4", auth});

            sheets.spreadsheets.values.append(
                {
                    spreadsheetId: spreadsheetId,
                    range: "A2:H", //Change Sheet1 if your worksheet's name is something else
                    valueInputOption: "USER_ENTERED",
                    resource: {
                        values: [data]
                    }
                },
                (err, response) => {
                    if (err) {
                        console.log("The API returned an error: " + err);
                        return cB(err, null);
                    } else {
                        return cB(null, "Appended");
                    }
                }
            );
        });
}

module.exports = {
    addRecord: addRecord
};
