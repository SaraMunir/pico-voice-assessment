import React from 'react'

function Java() {
  return (
    <section>
        <div>
            <p>For more information, see <a href="https://cloud.google.com/java/docs/setup">Setting Up a Java Development Environment</a>.</p>
            <p>if you are using <a href="https://maven.apache.org/">Maven</a>, add the following to your <code> pom.xml</code> file. For more information about BOMs, see <a href="https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM">The Google Cloud Platform Libraries BOM</a>.</p>
            <pre>
                <code>
<span className='main'>{`<dependencyManagement>`}</span>
<span className='main'>{`   <dependencies>`}</span>
<span className='main'>{`       <dependency>`}</span>

<span className='other2'>{`           <groupId>`}</span><span>{`com.google.cloud`}</span><span className='other2'>{`</groupId>`}</span>
<div>
    <span>{`<groupId>`}</span><span>{`com.google.cloud`}</span><span>{`<groupId>`}</span>
</div>
<span></span>
<span className='main'>{`       <dependency>`}</span>
<span className='main'>{`   <dependencies>`}</span>

<span className='main'>{`<dependencyManagement>`}</span>
{`<dependencyManagement>`}
                    {`
<dependencyManagement>
    <dependencies>
    <dependency>
        <groupId>com.google.cloud</groupId>
        <artifactId>libraries-bom</artifactId>
        <version>25.1.0</version>
        <type>pom</type>
        <scope>import</scope>
    </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>org.json</groupId>
        <artifactId>json</artifactId>
        <version>20220320</version>
    </dependency>
    <dependency>
        <groupId>com.google.cloud</groupId>
        <artifactId>google-cloud-speech</artifactId>
    </dependency>
</dependencies>
                    `}
                </code>
            </pre>
        </div>
        <div>
            <p>If you are using <a href="https://gradle.org/">Gradle</a>, add the following to your dependencies:</p>
            <pre>
                <code>
                    {`
implementation platform('com.google.cloud:libraries-bom:25.1.0')

implementation 'com.google.cloud:google-cloud-speech'
                    `}
                </code>
            </pre>
        </div>
    </section>
  )
}

export default Java