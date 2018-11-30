export default function() {
  const $script = require("scriptjs");
  const SCRIPT_PATH = `https://maps.googleapis.com/maps/api/js?key=${
    process.env.GOOGLE_API_KEY
  }&libraries=places`;
  return new Promise((resolve, reject) => {
    return $script(
      SCRIPT_PATH,
      () => {
        // @ts-ignore
        window.google.SCRIPT_PATH = SCRIPT_PATH;
        // @ts-ignore
        return resolve(window.google);
      },
      () => {
        return reject(new Error("Could not load google-maps script"));
      }
    );
  });
}
