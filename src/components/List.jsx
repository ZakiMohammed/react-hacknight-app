import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ParticipantService from '../services/ParticipantService';

const List = ({ participants, getAll, loader }) => {
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
      {participants &&
        participants.map(participant => (
          <Item
            participant={participant}
            loader={loader}
            key={participant.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  participants: PropTypes.array,
  getAll: PropTypes.func,
  loader: PropTypes.func,
};
