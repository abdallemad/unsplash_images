import { createContext,useContext,useState,useEffect } from "react";

const AppContext = createContext();

const getInisialDarkMode = ()=>{
  const prefersDark = window.matchMedia('prefers-color-schema:dark').matches;
  console.log(prefersDark)
  const darkThemeStorage = localStorage.getItem('dark');
  if(darkThemeStorage){
    if(darkThemeStorage == 'true') return true
    else return false;
  }
  return prefersDark;
}
export const AppProvider = (props)=>{
  const [darkTheme, setDartTheme] = useState(getInisialDarkMode());
  const [search,setSearch] = useState('cat');

  useEffect(()=>{
    document.body.classList.toggle('dark',darkTheme)
  },[])
  const toggleDarkTheme = ()=>{ 
    setDartTheme(!darkTheme);
    const body = document.body;
    body.classList.toggle('dark',!darkTheme);
    localStorage.setItem('dark',darkTheme?'false':'true')
  }

  return <AppContext.Provider value={{
    darkTheme,toggleDarkTheme,search,setSearch
  }}>
    {props.children}
  </AppContext.Provider>
}
export const useGlobalContext = ()=> useContext(AppContext);