import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
function App() {

  const [isClicked, setisClicked] = useState(false)
  const [star, setStar] = useState([
    {
      id: 1,
      isHovered: false,
      endLine: false
    },
    {
      id: 2,
      isHovered: false,
      endLine: false
    },
    {
      id: 3,
      isHovered: false,
      endLine: false
    },
    {
      id: 4,
      isHovered: false,
      endLine: false
    },
    {
      id: 5,
      isHovered: false,
      endLine: false
    },
    {
      id: 6,
      isHovered: false,
      endLine: false
    },
    {
      id: 7,
      isHovered: false,
      endLine: false
    },
    {
      id: 8,
      isHovered: false,
      endLine: false
    }

  ])

  const handleMouseEnter = (id) => {
    const updatedStars = star.map((s) =>
      s.id <= id ? { ...s, isHovered: true } : s
    );
    setStar(updatedStars);
  };

  const handleMouseLeave = () => {
    const resetStars = star.map((s) => ({ ...s, isHovered: false }));
    setStar(resetStars);
  };

  const handleClick = (id) => {
    setisClicked(!isClicked)
    console.log(isClicked);
    if (isClicked) {
      const updatedStars = star.map((s) =>
        s.id <= id ? { ...s, endLine : true } : s
      );
      setStar(updatedStars);
    } else {
      const resetStars = star.map((s) => ({ ...s, endLine: false }));
      setStar(resetStars);
    }
  }

  return (
    <div style={{ width: '100%', height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      {star.map((s, i) => (
        <CiStar style={{ width: "30px", height: "30px", margin: "10px", background: s.isHovered || s.endLine ? "yellow" : "" }} onMouseEnter={() => handleMouseEnter(s.id)} onMouseLeave={handleMouseLeave} key={i} onClick={() => handleClick(s.id)} />
      ))}
    </div>
  )
}

export default App