import {IBM_Plex_Mono , Unbounded} from "next/font/google";

export const ibmFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'] , variable : "--font-ibm" , display : 'swap' });
export const unboundedFont = Unbounded({ subsets: ['latin'], weight: ['400', '500', '700']  , style : ['normal' ] , variable : "--font-unbounded" , display : 'swap' });