import { useState, useEffect } from 'react';
import { FaGlobe, FaUserAstronaut } from 'react-icons/fa';
import Loader from '../components/Loader';
import ParticipantService from '../services/ParticipantService';

const Home = () => {
  const [participants, setParticipants] = useState();
  const [load, setLoad] = useState();

  const getAll = participants => {
    setParticipants(participants);
  };
  const loader = state => {
    setLoad(state);
  };
  const getCountries = () =>
    Array.from(new Set(participants.map(i => i.country))).join(', ');

  useEffect(() => {
    const getAllParticipants = async () => {
      try {
        loader(true);

        const data = await ParticipantService.getAll();
        const participantsAll = data.reverse();

        getAll(participantsAll);
      } catch (error) {
        window.alert(`Error Occurred: ${error.message}`);
      } finally {
        loader(false);
      }
    };

    getAllParticipants();
  }, []);

  return (
    <>
      <div id="carousel" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="wallpaper-1.jpg"
                className="d-block w-100 rounded-5"
                alt="wallpaper 1"
              />
              <div className="carousel-caption">
                <h1>Unleash Your Codecraft</h1>
                <p className="d-none d-md-block">
                  Join HacKnight: Where Innovation Meets the Knight Code
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="wallpaper-2.jpg"
                className="d-block w-100 rounded-5"
                alt="wallpaper 2"
              />
              <div className="carousel-caption">
                <h1>Forge into Reality</h1>
                <p className="d-none d-md-block">
                  HacKnight: Your Gateway to Hack and Conquer
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="wallpaper-3.jpg"
                className="d-block w-100 rounded-5"
                alt="wallpaper 3"
              />
              <div className="carousel-caption">
                <h1>Hack with Honor</h1>
                <p className="d-none d-md-block">
                  HacKnight: Defend Challenges, Embrace Solutions
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      {load && <Loader />}

      {participants && participants.length && (
        <div className="row mt-4 gy-4">
          <div className="col-md">
            <div className="p-5 text-center bg-danger-subtle rounded-4">
              <h1 className="display-1 fw-bolder text-danger">
                <FaUserAstronaut />
              </h1>
              <h1 className="fw-bolder text-danger">
                <span>{participants.length}</span> Knights
              </h1>
              <p>Clock is ticking. Hurry up! </p>
            </div>
          </div>
          <div className="col-md">
            <div className="p-5 text-center bg-body-secondary rounded-4">
              <h1 className="display-1 fw-bolder text-danger">
                <FaGlobe />
              </h1>
              <h1 className="fw-bolder text-danger">Global</h1>
              <p>
                Participants from <span>{getCountries()}</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
