 function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color; // returning the random color
    }

    // Function to toggle the shape class (circle <-> square)
    function toggleShape(element) {
      element.classList.toggle("circle");
    }

    // Function that ties everything together (scope & logic)
    function handleClick() {
      const shapeBox = document.getElementById("shapeBox"); // scoped inside this function

      toggleShape(shapeBox); // Using a function with a parameter

      const newColor = getRandomColor(); // Using return value
      shapeBox.style.backgroundColor = newColor; // Applying dynamic style
    }