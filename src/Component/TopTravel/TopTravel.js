import React from 'react';
import './TopTravel.css'
const TopTravel = () => {
    return (
        <div>
            <div class="row">
                <h4>Top Travel Destination</h4>
                <div class="column">
                    <div class="card">
                        <div><img src="https://i.ibb.co/4pC6CWr/traved1.jpg" alt="" /></div>

                        <p>Italy</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div><img src="https://i.ibb.co/JQJShfT/traveldeurope.jpg" alt="" /></div>

                        <p>Europe</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div><img src="https://i.ibb.co/j6FbSRN/tourdegypt3.jpg" alt="" /></div>

                        <p>Egypt</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <div><img src="https://i.ibb.co/L6t8ScW/tourd4africa.jpg" alt="" /></div>

                        <p>Africa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTravel;