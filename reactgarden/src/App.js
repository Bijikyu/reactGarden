import './App.css';

function App() {
  return (
    <div className="App">
        {/*<Header/>*/}
        {/*SPLASH*/}
        <main class="col">
            <hr class='hidHr'/>
            <hr class='hidHr'/>
            <h1>Title: Do X</h1>
            <hr/>
            <div id='splash' class='flex centerAlign row center'>
                <div class='col50 col'>
                    <img id="logoTransImg" src="/images/logotrans.png" alt="Logo"/>   
                </div>
                <div class='col66 col'>
                    <p id="splashText">We provide X including x, y, and z. Whether you are ready to work with us, or are still 
                        figuring out what you need, we're happy to answer your questions.</p>
                    <hr class='hidHr'/>
                    <hr class='hidHr'/>
                    <button><a href="/contact" class="buttonLink">Contact / Get Quote</a></button>
                </div>
            </div>
            <hr class='hidHr'/>

            <a href='#shapeBox'> {/*Scroll Arrow*/}
                <div id="shapeBox">
                    <div id="shape" class='flex centerAlign'>
                        <img id="shapeAroImg" src="/images/aro.png" alt="Arrow pointing down toward more content"/>
                    </div>
                </div>
            </a>
            <hr class='hidHr'/> 

            <div class='col card flex centerAlign'>
                <h2 id='offerings'>Our Offerings</h2>
                <hr/>
                <div class='grid'> {/*Item Container*/}         
                    {/*<Offering/>
                    <Offering/>
                    <Offering/>
                    <Offering/>*/}
                </div>
            </div>

            <hr/>
            
            <div class="flex centerAlign col center">
                <hr class='hidHr'/>
                <div class="col">
                    <img class="personImg" src="/images/fp1.jpeg" alt="A reviewer's portrait"/>
                </div>
                <div class="flex centerAlign col60 col">
                    <blockquote> "They done good. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam." </blockquote>
                </div>
            </div>
            <a href="/contact"><button>Contact / Get Quote</button></a>
            <hr class="quoteHr"/>
            <hr class='hidHr'/>

            <hr class='hidHr'/>
            <h1>APIS SANDBOX</h1>
            <form action="/" method="GET">
                <hr class='hidHr'/>
                <input type="text" name="username" class="form-control" placeholder="Enter a GitHub Username"/>
                <hr class='hidHr'/>
                <hr class='hidHr'/>
                <hr class='hidHr'/>
                <button type="submit">Go!</button>
            </form>


            <div>
                {/*<img src={userData.avatar_url}/>
                <h2>{userData.login}</h2>*/}
            </div>

            <div>
                <h3>Repos:</h3>


                    <ul>
                        {/*<a href={repo.html_url} target="_blank" class="list-group-item">
                            <li>{repo.name}</li>
                        </a>*/}
                    </ul>

            </div>

            <hr class='hidHr'/>
            
            <hr class='hidHr'/>
            <h1>DYNAMIC LOG IN SANDBOX</h1>    
                <div>
                    <form action="/facts" method="POST">
                        <input type="text" name="text"/>
                        <button type="submit">Add Fact</button>
                    </form>
                </div>
                <div>
                    <p> NOTHING HERE </p>
                </div>
            <hr class='hidHr'/>
            <hr class='hidHr'/>
        </main>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
