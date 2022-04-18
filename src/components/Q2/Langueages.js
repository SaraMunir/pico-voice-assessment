import React, { useState } from 'react'


function Langueages() {
    return (
    <div>Langueages</div>
    )
}

export default Langueages
export function Php() {
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/php/docs"> Using PHP on Google Cloud</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'php')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>
                <code  id='php'>
                    {`
pip install --upgrade google-cloud-speech
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}
export function CSharp(){
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/dotnet/docs/setup">Setting Up a C# Development Environment.</a></p>
            <pre>
                <button onClick={(e)=>copyText(e, 'cSharpText')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>
                <code id='cSharpText'>
                    {`
Install-Package Google.Apis
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}
export function Go(){
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/go/docs/setup">Setting Up a Go Development Environment</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'go')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>
                <code id='go'>
                    {`
go get cloud.google.com/go/speech/apiv1
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}
export function NodeJs (){
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/nodejs/docs/setup"> Setting Up a Node.js Development Environment</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'nodeJs')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>

                <code id='nodeJs'>
                    {`
npm install --save @google-cloud/speech
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}
export function Python (){
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/python/docs/setup"> Setting Up a Python Development Environment</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'python')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>
                <code id='python'>
                    {`
pip install --upgrade google-cloud-speech
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}
export function Ruby (){
    const [copied, setCopied] =useState(false)
    const copyText =(e, id)=>{
        const textToCopy= document.getElementById(`${id}`).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true)
        });
        setTimeout(() => {
            setCopied(false)
        }, 2500);
    }
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/ruby/docs/setup"> Setting Up a Ruby Development Environment</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'ruby')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>

                <code id='ruby'>
                    {`
gem install google-api-client
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}