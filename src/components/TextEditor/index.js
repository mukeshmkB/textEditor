import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  BannerContainer,
  BannerTitle,
  BannerImage,
  TextEditorContentContainer,
  IconsContainer,
  ItalicButton,
  BoldButton,
  UnderlineButton,
  TextAreaInput,
} from './styledComponent'

import {Component} from 'react'

class TextEditor extends Component {
  state = {
    boldProperty: false,
    italicPorperty: false,
    textDecorationProperty: false,
  }

  addBoldFont = () => {
    this.setState(prevState => ({boldProperty: !prevState.boldProperty}))
  }

  addItalicFont = () => {
    this.setState(prevState => ({italicPorperty: !prevState.italicPorperty}))
  }

  addTextDecoration = () => {
    this.setState(prevState => ({
      textDecorationProperty: !prevState.textDecorationProperty,
    }))
  }

  renderIcons = () => {
    const {boldProperty, italicPorperty, textDecorationProperty} = this.state

    const boldColor = boldProperty === false ? '#f1f5f9' : '#faff00'
    const italicColor = italicPorperty === false ? '#f1f5f9' : '#faff00'
    const textDecorationColor =
      textDecorationProperty === false ? '#f1f5f9' : '#faff00'

    return (
      <IconsContainer>
        <li>
          <BoldButton data-testid="bold" color={boldColor} type="button">
            <VscBold size={25} onClick={this.addBoldFont} />
          </BoldButton>
        </li>
        <li>
          <ItalicButton data-testid="italic" color={italicColor} type="button">
            <GoItalic size={25} onClick={this.addItalicFont} />
          </ItalicButton>
        </li>
        <li>
          <UnderlineButton
            data-testid="underline"
            color={textDecorationColor}
            type="button"
          >
            <AiOutlineUnderline size={25} onClick={this.addTextDecoration} />
          </UnderlineButton>
        </li>
      </IconsContainer>
    )
  }
  render() {
    const {boldProperty, italicPorperty, textDecorationProperty} = this.state
    const fontWeight = boldProperty === false ? 'normal' : 'bold'
    const fontStyle = italicPorperty === false ? 'noraml' : 'italic'
    const textDecoration =
      textDecorationProperty === false ? 'none' : 'underline'
    return (
      <AppContainer>
        <TextEditorContainer>
          <BannerContainer>
            <BannerTitle>Text Editor</BannerTitle>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </BannerContainer>
          <TextEditorContentContainer>
            {this.renderIcons()}
            <TextAreaInput
              rows="4"
              cols="50"
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </TextEditorContentContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
