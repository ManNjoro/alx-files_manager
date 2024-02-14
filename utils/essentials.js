import { ObjectId } from 'mongodb';

const essentials = {
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default essentials;
