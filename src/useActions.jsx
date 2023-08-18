import { useDispatch, useSelector } from "react-redux";
import { addTeam, deleteTeam, getTeam } from "./utilities/contents";

const useActions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const addDispatch = (id, name, year, roster) =>
    dispatch(addTeam(id, name, year, roster));

  const delDispatch = (id) => dispatch(deleteTeam(id));

  const getDispatch = (id) => dispatch(getTeam(id));

  return {
    state,
    addDispatch,
    delDispatch,
    getDispatch,
  };
};

export default useActions;
