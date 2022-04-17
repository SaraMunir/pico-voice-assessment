import React, {useState} from 'react'

function Java() {
    const [copied, setCopied] =useState(false)
    const [copied2, setCopied2] =useState(false)
    const [copied3, setCopied3] =useState(false)
    const copyText =(e, id)=>{
        if(id==="java"){
            const textToCopy= document.getElementById(`${id}`).innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                setCopied(true)
            });
            setTimeout(() => {
                setCopied(false)
            }, 2500);
        }
        if(id==="java2"){
            const textToCopy= document.getElementById(`${id}`).innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                setCopied2(true)
            });
            setTimeout(() => {
                setCopied2(false)
            }, 2500);
        }
        if(id==="java3"){
            const textToCopy= document.getElementById(`${id}`).innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                setCopied3(true)
            });
            setTimeout(() => {
                setCopied3(false)
            }, 2500);
        }
    }
  return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/java/docs/setup">Setting Up a Java Development Environment</a>.</p>
            <p>if you are using <a href="https://maven.apache.org/">Maven</a>, add the following to your <code> pom.xml</code> file. For more information about BOMs, see <a href="https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM">The Google Cloud Platform Libraries BOM</a>.</p>
            <pre>
                <button onClick={(e)=>copyText(e, 'java')}><i className="fas fa-copy"></i></button>
                <p className={copied ? 'successBtn on' : 'successBtn'}>copied</p>
                
                <code id='java'>
<span className='main'>{`<dependencyManagement>`}</span>
<span className='main'>{`   <dependencies>`}</span>
<span className='main'>{`       <dependency>`}</span>
    <div>
        <span className='tag'>{`           <groupId>`}</span><span>{`com.google.cloud`}</span><span className='tag'>{`</groupId>`}</span>
    </div>
    <div>
        <span className='tag'>{`           <artifactId>`}</span><span>{`libraries-bom`}</span><span className='tag'>{`</artifactId>`}</span>
    </div>
    <div>
        <span className='tag'>{`           <version>`}</span><span>{`25.1.0`}</span><span className='tag'>{`</version>`}</span>
    </div>
    <div>
        <span className='tag'>{`           <type>`}</span><span>{`pom`}</span><span className='tag'>{`</type>`}</span>
    </div>
    <div>
        <span className='tag'>{`           <scope>`}</span><span>{`import`}</span><span className='tag'>{`</scope>`}</span>
    </div>
<span></span>
<span className='main'>{`       <dependency>`}</span>
<span className='main'>{`   <dependencies>`}</span>
<span className='main'>{`<dependencyManagement>`}</span>

<br />
<span className='main'>{`<dependencies>`}</span>
<span className='main'>{`   <dependency>`}</span>
    <div>
        <span className='tag'>{`        <groupId>`}</span><span>{`org.jso`}</span><span className='tag'>{`</groupId>`}</span>
    </div>
    <div>
        <span className='tag'>{`        <artifactId>`}</span><span>{`json`}</span><span className='tag'>{`</artifactId>`}</span>
    </div>
    <div>
        <span className='tag'>{`        <version>`}</span><span>{`20220320`}</span><span className='tag'>{`</version>`}</span>
    </div>
    
<span></span>
<span className='main'>{`   <dependency>`}</span>
<span className='main'>{`<dependencies>`}</span>
                </code>
            </pre>
        </div>
        <div>
            <p>If you are using <a href="https://gradle.org/">Gradle</a>, add the following to your dependencies:</p>
            <div className='preWrap'>
                <button onClick={(e)=>copyText(e, 'java2')}><i className="fas fa-copy"></i></button>
                <p className={copied2 ? 'successBtn on' : 'successBtn'}>copied</p>
                <code id='java2'>
                    <p>implementation platform('com.google.cloud:libraries-bom:25.1.0')</p>
                    <p>implementation 'com.google.cloud:google-cloud-speech'</p>
                </code>
            </div>
        </div>
        <div>
            <p>If you are using <a href="https://www.scala-sbt.org/">sbt</a>, add the following to your dependencies:</p>
            <div className='preWrap'>
                <button onClick={(e)=>copyText(e, 'java3')}><i className="fas fa-copy"></i></button>
                <p className={copied3 ? 'successBtn on' : 'successBtn'}>copied</p>


                <code  id='java3'>
                    <p>libraryDependencies += "com.google.cloud" % "google-cloud-speech" % "2.2.14"</p>
                </code>
            </div>
        </div>
    </section>
  )
}

export default Java