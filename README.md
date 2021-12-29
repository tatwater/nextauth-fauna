# nextauth-fauna
A Next.js app using NextAuth.js and its FaunaAdapter for authentication

## Setup

### Install packages

Run `% yarn install`

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

Run `% yarn dev`

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
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/verify-request?provider=email&type=email
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/verify-request?provider=email&type=email'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=4a4820825045d2565f6cd9c0b1c6a92a8cfcf129e95f3d3dda64b756b539bd07&email=<MY_EMAIL_HERE>
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=4a4820825045d2565f6cd9c0b1c6a92a8cfcf129e95f3d3dda64b756b539bd07&email=<MY_EMAIL_HERE>'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/verify-request?provider=email&type=email
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/verify-request?provider=email&type=email'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=b90c6835283167c237365c0304a6d08114469ae862131749be1511488c1407af&email=<MY_EMAIL_HERE>
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=b90c6835283167c237365c0304a6d08114469ae862131749be1511488c1407af&email=<MY_EMAIL_HERE>'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/signin
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/signin'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/verify-request?provider=email&type=email
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/verify-request?provider=email&type=email'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=0723103c42b8e32f7e7930bce3ca76883bcd0a517bd7892790cb4b5ffca5c5b5&email=<MY_EMAIL_HERE>
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/callback/email?callbackUrl=http%3A%2F%2Flocalhost%3A3000&token=0723103c42b8e32f7e7930bce3ca76883bcd0a517bd7892790cb4b5ffca5c5b5&email=<MY_EMAIL_HERE>'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
workbox-ab03a9e4.js:48 workbox Router is responding to: /api/auth/error?error=Verification
workbox-ab03a9e4.js:48 workbox Using NetworkOnly to respond to '/api/auth/error?error=Verification'
error:1 
        
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
      token: '4a7e229d83eed3e0f2e29cc00381c72a6ec3909836653a44e4329d0ceb444e97',
      expires: 2021-12-29T03:23:08.152Z
    }
  ]
}
[next-auth][debug][adapter_useVerificationToken] {
  args: [
    {
      identifier: '<MY_EMAIL_HERE>',
      token: '4a7e229d83eed3e0f2e29cc00381c72a6ec3909836653a44e4329d0ceb444e97'
    }
  ]
}
```