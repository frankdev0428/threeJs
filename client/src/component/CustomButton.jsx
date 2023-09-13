import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers'



const CustomButton = ({ type,customStyles,handleClick,title }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    } else if( type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      }
    }
  }
  return (
   <button style={generateStyle(type)} className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} onClick={handleClick}>
      {title}
   </button>
  )
}

export default CustomButton