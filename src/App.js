function App() {
  return (
    <div className="wrapper">
      <div className="stars"></div>
      <div className="twinkling"></div> 
      <div className="clouds"></div>
      <div className="titleWrapper">
        <div className="logo">
          <img src="/PSY Logo.png" alt="PSY Network Logo"/>
        </div>
        <div className="title">
          <h2>The PSY Network Launch is Imminent</h2>
          <div className="links">
            <a href="https://magiceden.io/marketplace/shroomz">
              <div className="link">
                Magic Eden
              </div>
            </a>
            <a href="https://digitaleyes.market/collections/shroomz">
              <div className="link">
                DigitalEyes
              </div>
            </a>
            <a href="/">
              <div className="link">
                Staking
              </div>
            </a>
          </div>
        </div>
        <div className="social">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Shroomz_NFT">
            <div className="socialLink">
              <i class="fab fa-twitter"></i>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="http://discord.gg/SbKRhMHF88">
            <div className="socialLink">
              <i class="fab fa-discord"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
