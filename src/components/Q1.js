import React, { useState } from 'react'
import NavBar from './NavBar'

import {choicePython, choiceCJava} from '../functions/Linux'
import {caseForStableMac} from '../functions/caseForStableMac'
import {caseForStableWin} from '../functions/caseForStableWin'
import {resPrevNight} from '../functions/resPrevNight'
import { resStable } from '../functions/resStable'
function Q1() {
    const [ques, setQuests]=useState([
        {
            q:1, 
            type: 'PyTorchBuild', 
            typeName: 'PyTorch Build', 
            options: ['Stable (1.11.0)', 'Preview (Nightly)', 'LTS (1.8.2)'],
            show: false
        },
        {
            q:2, 
            type: 'YourOS', 
            typeName: 'Your OS', 
            options: ['Linux', 'Mac', 'Windows'],
            show: false
        },
        {
            q:3, 
            type: 'Language', 
            typeName: 'Language', 
            options: ['Python', 'C++ / Java'],
            options2: [
                {
                    lang:'Python',
                    packages: ['Conda', 'Pip', 'Source']
                },
                {
                    lang: 'C++ / Java', 
                    packages: ['Conda', 'Pip', 'Source']
                }
            ],
            show: false
        },
        {
            q:4, 
            type: 'Packages', 
            typeName: 'Packages', 
            options: [],
            show: false
        },
        {
            q:5, 
            type: 'ComputePlatform', 
            typeName: 'Compute Platform', 
            options: ['CUDA 10.2', 'CUDA 11.3', 'ROCM 4.5.2 (beta)', 'CPU'],
            show: false
        }
    ])
    const [result, setResult]=useState({show: false, message: ''})

    const [userChoice, setUserChoice]=useState({
        PyTorchBuild:'', YourOS: "", Language: "", Packages: "", ComputePlatform:""
    })
    const selectBuild=(opt, type)=>{
        switch (type) {
            case 'PyTorchBuild':
                setUserChoice({...userChoice, [type]: opt})
                console.log('what is opt: ', opt)
                let quesCopy = [...ques]
                if(userChoice.YourOS){
                    if ( opt === 'LTS (1.8.2)'){
                        quesCopy[4].options = ['CUDA 10.2', 'CUDA 11.1', 'ROCM 4.5.2 (beta)','CPU']
                    }else {
                        quesCopy[4].options = ['CUDA 10.2', 'CUDA 11.3', 'ROCM 4.5.2 (beta)','CPU']
                    }
                }
                quesCopy[1].show = true
                setQuests([...quesCopy])
                setResult({show: false, message: ''})
                break;
            case 'YourOS':
                if(opt==="Linux"){
                    let copyQues = [...ques]
                    if(userChoice.PyTorchBuild === 'LTS (1.8.2)'){
                        copyQues[4].options = ['CUDA 10.2', 'CUDA 11.1', 'ROCM 4.5.2 (beta)','CPU']
                    }else {
                        copyQues[4].options = ['CUDA 10.2', 'CUDA 11.3', 'ROCM 4.5.2 (beta)','CPU']
                    }
                    setQuests([...copyQues])
                }else if(opt ==="Mac"){
                    let copyQues = [...ques]
                    copyQues[4].options = ['CPU']
                    setQuests([...copyQues])
                } else {
                    let copyQues = [...ques]
                    if(userChoice.PyTorchBuild === 'LTS (1.8.2)'){
                        copyQues[4].options = ['CUDA 10.2', 'CUDA 11.1', 'CPU']
                    }else {
                        copyQues[4].options = ['CUDA 10.2', 'CUDA 11.3', 'CPU']
                    }
                    setQuests([...copyQues])
                }
                let userChoiceCopy0 = {...userChoice}

                if(ques[4].show === true ){
                    userChoiceCopy0.ComputePlatform = ""
                }
                let quesCopy2 = [...ques]
                quesCopy2[2].show = true
                setQuests([...quesCopy2])
                setUserChoice({...userChoiceCopy0, [type]: opt})
                setResult({show: false, message: ''})
                break;
            case 'Language':
                if(opt === 'Python'){
                    let copyQues = [...ques]
                    copyQues[3].options = ['Conda', 'Pip', 'Source']
                    setQuests([...copyQues])
                }else {
                    let copyQues = [...ques]
                    copyQues[3].options = ['LibTorch']
                    setQuests([...copyQues])
                }
                let userChoiceCopy = {...userChoice}
                if(ques[3].show === false){
                    let quesCopy3 = [...ques]
                    quesCopy3[3].show = true
                    setQuests([...quesCopy3])
                }else{
                    userChoiceCopy.Packages = ""
                    userChoiceCopy.ComputePlatform = ""
                    let quesCopy3 = [...ques]
                    quesCopy3[4].show = false
                    setQuests([...quesCopy3])
                }
                setUserChoice({...userChoiceCopy, [type]: opt})
                setResult({show: false, message: ''})
                break;
            case 'Packages':
                let userChoiceCopy2 = {...userChoice}
                if(ques[4].show === false){
                    let quesCopy4 = [...ques]
                    quesCopy4[4].show = true
                    setQuests([...quesCopy4])
                }else {
                    userChoiceCopy2.ComputePlatform = ""
                }
                setUserChoice({...userChoiceCopy2, [type]: opt})
                setResult({show: false, message: ''})
                break;
            case 'ComputePlatform':
                let quesCopy5 = [...ques]
                // quesCopy5[5].show = true
                setQuests([...quesCopy5])
                let copyUserChocice= {...userChoice}
                copyUserChocice = {...userChoice, [type]: opt}
                setUserChoice({...copyUserChocice})
                // setShowResultBtn(true)
    
            getResult(copyUserChocice)
                break;
            default:
                break;
        }
    }
    const getResult=(usersCh)=>{
        switch (usersCh.PyTorchBuild){
            case 'Stable (1.11.0)': 
                setResult({show: true, message: resStable(usersCh)})
                break;
            case 'Preview (Nightly)': 
                setResult({show: true, message: resPrevNight(usersCh)})
                break;
            case 'LTS (1.8.2)': 
                setResult({show: true, message: resPrevNight(usersCh)})
                break;
            default:
                break;
        }
    } 

    const caseOs=(Os)=>{
        switch (Os.YourOS) {
            case "Linux":
                if(Os.Language==="Python"){
                    return choicePython(Os)
                }
                if(Os.Language==="C++ / Java"){
                    return choiceCJava(Os)
                }
                break;
            case "Mac":
                if(Os.Language==="Python"){
                    return caseForStableMac(Os,"Python")
                }
                if(Os.Language==="C++ / Java"){
                    return caseForStableMac(Os,"C++ / Java")
                    // return choiceCJava(Os)
                }
                break;
            case "Windows":
                if(Os.Language==="Python"){
                    return caseForStableWin(Os,"Python")
                }
                if(Os.Language==="C++ / Java"){
                    return caseForStableWin(Os,"C++ / Java")
                }
                break;
            default:
                break;
        }
    }
    return (
        <>
            <NavBar/>
            <section className='Q1'>
                    <div className='allQues'>
                        <ul>
                            <li>
                                <p>Choose Your Build</p>
                                <div className="row">
                                {ques[0].options.map(opt=>
                                    userChoice.PyTorchBuild=== opt ?
                                    <button key={opt} className='optionBtn selectedBtn'>{opt}</button> : 
                                    <button key={opt} className='optionBtn' onClick={()=>selectBuild(opt, ques[0].type)}>{opt}</button>
                                )}
                                </div>
                            </li>
                            <li>
                                {
                                    ques[1].show ?
                                    <div>
                                        <p>Choose Your OS</p>
                                        {ques[1].options.map(opt=>
                                            userChoice.YourOS === opt ?
                                            <button key={opt} className='optionBtn selectedBtn'>{opt}</button> : 
                                            <button key={opt} className='optionBtn' onClick={()=>selectBuild(opt, ques[1].type)}>{opt}</button>
                                        )}
                                    </div>
                                    : null
                                }
                            </li>
                            <li>
                                {
                                    ques[2].show ?
                                    <div>
                                        <p>Choose Your Language</p>
                                        {ques[2].options.map(opt=>
                                            userChoice[ques[2].type]=== opt ?
                                            <button key={opt} className='optionBtn selectedBtn'>{opt}</button> : 
                                            <button key={opt} className='optionBtn' onClick={()=>selectBuild(opt, ques[2].type)}>{opt}</button>
                                        )}
                                    </div>
                                    : null
                                }
                            </li>
                            <li>
                                {
                                    ques[3].show ?
                                    <div>
                                        <p>Choose Your Package</p>
                                        {ques[3].options.map(opt=>
                                            userChoice[ques[3].type]=== opt ?
                                            <button key={opt} className='optionBtn selectedBtn'>{opt}</button> : 
                                            <button key={opt} className='optionBtn' onClick={()=>selectBuild(opt, ques[3].type)}>{opt}</button>
                                        )}
                                    </div>
                                    : null
                                }
                            </li>
                            <li>
                                {
                                    ques[4].show ?
                                    <div>
                                        <p>Choose Your Compute Platform</p>
                                        {ques[4].options.map(opt=>
                                            userChoice[ques[4].type]=== opt ?
                                            <button key={opt} className='optionBtn selectedBtn'>{opt}</button> : 
                                            <button key={opt} className='optionBtn' onClick={()=>selectBuild(opt, ques[4].type)}>{opt}</button>
                                        )}
                                    </div>
                                    : null
                                }
                            </li>
                        </ul>
                    </div>
                    <div className='resContainer' >
                        {
                            result.show ? 
                            <h3 className='resultDisplay'>{result.message}</h3>
                            : null
                        }
                    </div>
            </section>
        </>
    )
}

export default Q1