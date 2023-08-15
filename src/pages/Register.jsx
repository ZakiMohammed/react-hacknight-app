import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';

import ParticipantService from '../services/ParticipantService';
import Loader from '../components/Loader';

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gitHubLink, setGitHubLink] = useState('');
  const [loader, setLoader] = useState(false);

  const handleFullName = e => setFullName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleCountry = e => setCountry(e.target.value);
  const handleGitHubLink = e => setGitHubLink(e.target.value);

  const handleSubmit = async event => {
    try {
      event.preventDefault();

      setLoader(true);

      if (fullName === '') {
        window.alert('Please fill the form');
        return;
      }

      const newParticipant = {
        id: uuid(),
        fullName,
        email,
        country,
        gitHubLink,
      };

      await ParticipantService.register(newParticipant);

      navigate('/participants');
    } catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setFullName('');
      setLoader(false);
    }
  };

  return (
    <>
      {loader && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={gitHubLink}
            onChange={handleGitHubLink}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="submit">
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
