import Styled from 'styled-components'

export const AppContainer = Styled.div`
  
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
     background-color:#25262c;
     min-height:100vh;

`

export const TextEditorContainer = Styled.div`
      display:flex;
     flex-direction: row;
     background-color:#1b1c22;
     height:85vh;
     padding:20px;
     border-radius:6px;
`
export const BannerContainer = Styled.div`
      display:flex;
     flex-direction:column;
     align-items:center;
      padding:20px;
      width:50%;
    
 `
export const BannerTitle = Styled.h1`
  
    font-family:"roboto";
    font-size:28px;
    font-weight:500;
    color:#ffffff;
 
 `
export const BannerImage = Styled.img`
    
    margin-top:65px;
    width:260px;
    height:300px;
    

`
export const TextEditorContentContainer = Styled.div`

     display:flex;
     flex-direction:column;
     border:1px solid #334155;
     background-color #25262c;
     margin-left:10px;
     flex:1;
`
export const IconsContainer = Styled.ul`
   
    display:flex;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid  #334155;
    list-style-type:none;
    padding:8px 6px;


`


export const BoldButton = Styled.button`

     background-color:transparent;
     color:${props => props.color};
     border:none;
     outline:none;
     cursor:pointer;

`
export const ItalicButton = Styled.button`

     background-color:transparent;
     color:${props => props.color};
     border:none;
     outline:none;
     cursor:pointer;

`
export const UnderlineButton = Styled.button`

     background-color:transparent;
     color:${props => props.color};
     border:none;
     outline:none;
     cursor:pointer;


`

export const TextAreaInput = Styled.textarea`

    color:#f1f5f9;
    font-family:"roboto";
    font-size:14px;
    font-weight:${props => props.fontWeight};
    font-style:${props => props.fontStyle};
    text-decoration:${props => props.textDecoration};
    background-color:transparent;
    border:none;
    outline:none;
    padding:15px;

`
