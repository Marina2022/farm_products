import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const ScrollToTop = () => {
 const location = useLocation();
 useEffect(()=>{
  if(location.pathname ==='/') console.log('hahaha')
 })

 window.scrollTo(0, 0)
 return null;
}
// хха, без useEffect тоже скролл работает. Кароч useLocation - перерендеривает страницу и выполняет код даже если возвращаемых им значений в ней нет.

export default ScrollToTop


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
//
//  function ScrollToTop() {
//   const { pathname } = useLocation();
//
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//
//   return null;
// }
//
// export default ScrollToTop;
