import './MainArea.css';
import Panel from './Panel';
function MainArea() {
  return (
    <main className='main'>
        <Panel className="news">
        <img src = "./Storm-damage.png" alt="storm damage" className="panel-image-left"
        />
            <div className="panel-content">
                <h2>Storm Damage at the Sanctuary</h2>
                <span className="news-events__meta">November 21, 2024</span>
                <p>This week, our sanctuary was hit hard by the devastating storm that is impacting our region. Thankfully, all our animals, staff, and volunteers are safe. The power is still out with no estimated day or time of restoration and we have lots of trees and branches down, with damage to Dog Towne, Big Pig Yard, and our Aviary. Our team has already made temporary repairs so the animals can be let out of their barns. We also began the daunting task of clearing the countless fallen trees and debris across our 85-acre sanctuary.</p>
            </div>
        </Panel>
        <Panel className="news">
        <img src = "./Sanctuary-Spay.jpg" alt="Cat Image Left" className="panel-image-left"
        />
            <div className="panel-content">
                <h2>Celebrating 70,000 spay/neuter surgeries and counting!</h2>
                <span className="news-events__meta">June 11, 2024</span>
                <p>We’ve reached a significant milestone in our mission to end animal cruelty. Our Pet Services program has performed 70,000 spay and neuter surgeries for pets in need in our community!</p>
                <p>Every spay and neuter surgery plays a critical role in reducing shelter overpopulation and unnecessary euthanasia. For over 23 years, this program has made a significant impact on animal welfare in our community and beyond. What began as the first ever mobile spay/neuter clinic in Washington in 2001, has grown to multiple counties with clinics operating almost daily.</p>
            </div>
        </Panel>
    </main>
);
}

export default MainArea;