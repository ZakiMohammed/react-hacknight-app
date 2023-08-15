import { useState } from 'react';
import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';

const Participants = () => {
  const [participants, setParticipants] = useState();
  const [load, setLoad] = useState();

  const getAll = participants => {
    setParticipants(participants);
  };
  const loader = state => {
    setLoad(state);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <List participants={participants} getAll={getAll} loader={loader} />
          <Empty notes={participants} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
