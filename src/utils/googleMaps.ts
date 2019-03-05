export default function(googleMapsApiKey: string): Promise<void> {
  const $script = require("scriptjs");
  if (typeof google !== "undefined" && google && google.maps)
    return Promise.resolve();
  const SCRIPT_PATH = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
  return new Promise((resolve, reject) => {
    return $script(
      SCRIPT_PATH,
      () => {
        return resolve();
      },
      () => {
        return reject(new Error("Could not load google-maps script"));
      }
    );
  });
}
