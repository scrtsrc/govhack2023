import { Loader } from "@googlemaps/js-api-loader";
const loader = new Loader({
  apiKey: '',
  version: 'weekly',
  libraries: ['places'],
});
export default loader;