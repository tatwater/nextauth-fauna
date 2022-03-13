# nextauth-fauna
A Next.js app using NextAuth.js and its FaunaAdapter for authentication

## Setup

### Install packages

Run `% npm install`

### Create `.env.local` in project root:

```
FAUNA_ADMIN_KEY=""
FAUNA_CLIENT_SECRET=""

AUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"

EMAIL_FROM=""
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PASSWORD=""
EMAIL_SERVER_PORT=""
EMAIL_SERVER_USER=""

```

### Start Next

Run `% npm run dev`

Navigate to `localhost:3000`

## ISSUE

Receiving an email (using Gmail) and clicking the Sign In button provided lands on `http://localhost:3000/api/auth/error?error=Verification` with the following message:

```
Unable to sign in
The sign in link is no longer valid.

It may have been used already or it may have expired.

Sign in
```

The following is the browser's console output on the error page after clicking the email link:

```
Failed to load resource: the server responded with a status of 403 (Forbidden)
```

The following is the app's terminal output for the whole loop:

```
wait  - compiling /api/auth/[...nextauth]...
event - compiled client and server successfully in 43 ms (212 modules)
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 44 ms (213 modules)
[next-auth][debug][adapter_getUserByEmail] { args: [ '<MY_EMAIL_HERE>' ] }
[next-auth][debug][adapter_createVerificationToken] {
  args: [
    {
      identifier: '<MY_EMAIL_HERE>',
      token: '946fe24ea717bf2678ad99abd29c1019a89737fc402c911dfeee8ff680ecaf3b',
      expires: 2022-03-14T07:29:51.065Z
    }
  ]
}
[next-auth][debug][adapter_useVerificationToken] {
  args: [
    {
      identifier: '<MY_EMAIL_HERE>',
      token: '946fe24ea717bf2678ad99abd29c1019a89737fc402c911dfeee8ff680ecaf3b'
    }
  ]
}
```

The following is a new entry in `verification_tokens` in the Fauna Dashboard; the token matches and the expires time is 10 hours from now, as anticipated:

```
{
  "ref": Ref(Collection("verification_tokens"), "326052758049260113"),
  "ts": 1647206991155000,
  "data": {
    "identifier": "<MY_EMAIL_HERE>",
    "token": "946fe24ea717bf2678ad99abd29c1019a89737fc402c911dfeee8ff680ecaf3b",
    "expires": Time("2022-03-14T07:29:51.065Z")
  }
}
```