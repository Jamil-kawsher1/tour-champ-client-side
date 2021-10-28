import firebaseConfig from "./Firebase.config";
import { initializeApp } from 'firebase/app'
const authorizeInialization = () => {
    initializeApp(firebaseConfig);
}
export default authorizeInialization;
