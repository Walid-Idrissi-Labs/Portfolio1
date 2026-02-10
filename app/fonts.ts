import {IBM_Plex_Mono , Unbounded , Lato , JetBrains_Mono} from "next/font/google";

export const ibmFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100' , '200', '300' , '400' , '500'] , variable : "--font-ibm" , display : 'swap' });
export const unboundedFont = Unbounded({ subsets: ['latin'], weight: ['200' , '400', '500', '700']  , style : ['normal' ] , variable : "--font-unbounded" , display : 'swap' });
export const latoFont = Lato({ subsets: ['latin'], weight: ['100' , '300' , '400' , '700' ]  , style : ['normal'  , 'italic'] , variable : "--font-lato" , display : 'swap' });
export const jetbrainsmonoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['100' , '800'] ,style : ['normal' , 'italic'] ,   variable: "--font-jetbrains-mono" , display: 'swap' });