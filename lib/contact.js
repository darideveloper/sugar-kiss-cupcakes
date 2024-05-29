export const whatsappLinkBase = "https://api.whatsapp.com/send?phone=12019061316&text="

export const facebookLink = "https://www.facebook.com/SugarKissNadine/"

export const phone = "201-906-1316"
export const phoneLink = `tel:+1${phone.replaceAll("-", "")}`
export const email = "sugarkisscupcakes@aol.com"
export const emailLink = `mailto:${email}`

export const socials = [
  {
    "name": "facebook",
    "link": facebookLink,
  },
  {
    "name": "venmo",
    "link": "https://venmo.com/u/Sugar-kiss",
  },
  {
    "name": "phone",
    "link": phoneLink,
  },
  {
    "name": "email",
    "link": emailLink,
  }
]

export const links = [
  {
    "text": phone,
    "link": phoneLink,
    "isExternal": true
  },
  {
    "text": email,
    "link": emailLink,
    "isExternal": true
  },
  {
    "text": "Our Policy",
    "link": "/policy",
    "isExternal": false
  },
  {
    "text": "Ridgefield, NJ 07657",
    "link": "#footer",
    "isExternal": false
  }
]