import {IBM_Plex_Mono , Unbounded , Lato} from "next/font/google";

export const ibmFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100' , '200', '300' , '400' , '500'] , variable : "--font-ibm" , display : 'swap' });
export const unboundedFont = Unbounded({ subsets: ['latin'], weight: ['400', '500', '700']  , style : ['normal' ] , variable : "--font-unbounded" , display : 'swap' });
export const latoFont = Lato({ subsets: ['latin'], weight: ['100']  , style : ['normal'  , 'italic'] , variable : "--font-lato" , display : 'swap' });