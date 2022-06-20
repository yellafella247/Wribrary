import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { getPayload } from '../helpers/auth'

import PageNavbar from './default/PageNavbar'

const Texts = () => {

  const payload = getPayload()

  const [currentUser, setCurrentUser] = useState(0)

  const [texts, setTexts] = useState([])
  const [selectedText, setSelectedText] = useState(false)

  const [content, setContent] = useState('')

  const [errors, setErrors] = useState(false)

  const [addMode, setAddMode] = useState(false)
  const [addContent, setAddContent] = useState({
    'title': '',
    'content': '',
  })

  useEffect(() => {
    console.log(payload.sub)
    setCurrentUser(payload.sub)
    // const getCurrentUser = async () => {
    //   console.log(payload.sub)
    //   try {
    //     const { data } = await axios.get(`/api/admin/users/${payload.sub}`)
    //     setCurrentUser(data)
    //   } catch (err) {
    //     console.log(err)
    //     setErrors(true)
    //   }
    // }
    // getCurrentUser()
  }, [payload.sub])

  useEffect(() => {
    console.log(payload.sub)
    setCurrentUser(payload.sub)
  }, [])

  const getTexts = async () => {
    try {
      const { data } = await axios.get(`/api/texts/group/${currentUser}`)
      console.log(data)
      setTexts(data)
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }

  useEffect(() => {
    currentUser && getTexts()
  }, [currentUser])

  //#region --- List
  const handleListButton = (e) => {
    console.log(e.target)
    getSelectedText(e.target.name)
    setAddMode(false)
  }

  useEffect(() => {
    if (selectedText) {
      setContent(selectedText.content)
      console.log(selectedText)
    }
  }, [selectedText])

  const getSelectedText = async (textID) => {
    try {
      const { data } = await axios.get(`/api/texts/${textID}/`)
      console.log(data)
      setSelectedText(data)
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }

  const addText = async () => {
    try {
      console.log({
        ...addContent,
        'user': currentUser,
      })
      const { data } = await axios.post('/api/texts/', {
        ...addContent,
        'user': currentUser,
      })
      console.log(data)
      getTexts()
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }

  const handleAddTextButton = (e) => {
    currentUser && setAddMode(true)
  }

  //#endregion --- List

  //#region --- Content

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const saveText = async (textID) => {
    try {
      await axios.put(`/api/texts/${textID}/`, {
        'id': textID,
        'title': selectedText.title,
        'content': content,
        'user': currentUser,
      })
      console.log('Saved Text')
      getSelectedText(textID)
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }

  const handleContentSave = () => {
    saveText(selectedText.id)
    setContent()
  }

  const deleteText = async (textID) => {
    try {
      await axios.delete(`/api/texts/${textID}/`)
      console.log('Deleted text')
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }

  const handleContentDelete = () => {
    deleteText(selectedText.id)
    getTexts()
    setSelectedText(texts[0])
  }

  const handleAddTitleChange = (e) => {
    setAddContent({
      ...addContent,
      title: e.target.value,
    })
  }

  const handleAddContentChange = (e) => {
    setAddContent({
      ...addContent,
      content: e.target.value,
    })
  }

  const handleAddContentSave = () => {
    addText()
    setSelectedText(texts[texts.length - 1])
  }

  const handleAddContentDiscard = () => {
    setAddContent({
      'title': '',
      'content': '',
    })
  }
  //#endregion --- Content

  return (
    <div className='content texts'>
      <PageNavbar />
      <h2 className='pageTitle'>Writing Room</h2>
      <div className='textContainer'>
        <section className='listSection'>
          {
            texts.length > 0
            &&
            <>
              {
                texts.map(text => {
                  return (
                    <button key={text.id} name={text.id} onClick={handleListButton}>{text.title}</button>
                  )
                })
              }
              <button name='addText' onClick={handleAddTextButton}>+</button>
            </>
          }
        </section>
        <section className='editContainer'>
          {
            addMode
              ?
              <section className='addSection'>
                <input name='title' type='text' placeholder='Title' value={addContent.title} onChange={handleAddTitleChange}></input>
                <textarea name='content' value={addContent.content} placeholder='Lorem ipsum' onChange={handleAddContentChange}></textarea>
                <div className='buttons'>
                  <button onClick={handleAddContentSave}>Save</button>
                  <button onClick={handleAddContentDiscard}>Discard</button>
                </div>
              </section>
              :
              <section className='textSection'>
                {
                  selectedText
                  &&
                  <>
                    <h3>{selectedText.title}</h3>
                    <textarea value={content} onChange={handleContentChange}></textarea>
                    <div className='buttons'>
                      <button onClick={handleContentSave}>Save</button>
                      <button onClick={handleContentDelete}>Delete</button>
                    </div>
                  </>
                }
              </section>
          }
        </section>
      </div>
    </div>
  )
}

export default Texts