import React from 'react'

function Langueages() {
  return (
    <div>Langueages</div>
  )
}

export default Langueages
export function Php() {
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/php/docs"> Using PHP on Google Cloud</a>.</p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
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
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/dotnet/docs/setup">Setting Up a C# Development Environment.</a></p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
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
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/go/docs/setup">Setting Up a Go Development Environment</a>.</p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
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
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/nodejs/docs/setup"> Setting Up a Node.js Development Environment</a>.</p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
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
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/python/docs/setup"> Setting Up a Python Development Environment</a>.</p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
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
    return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/ruby/docs/setup"> Setting Up a Ruby Development Environment</a>.</p>
            <pre>
                <button><i class="fas fa-copy"></i></button>
                <code>
                    {`
gem install google-api-client
                    `}
                </code>
            </pre>
        </div>
    </section>
    )
}