# Firefly Grid Simulation - Training Progress (2024-02-01)

# Overview 📜

- Introduction
- Installation
- Results

## Introduction 🧑‍🔧

**Overview:** This repository contains a simple JavaScript program designed to simulate the movement of a firefly within a grid. The simulation is intended for educational purposes and serves as a demonstration of basic JavaScript programming concepts. ****

## Setup 🖱️

1. **Install Visual Studio Code:**
If you haven't installed Visual Studio Code, download and install it from the official website: Visual Studio Code.
2. **Install Node.js:**
Ensure that Node.js is installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
3. **Open Visual Studio Code:**
Launch Visual Studio Code on your computer.
4. **Open the JavaScript File:**
Open the JavaScript file you want to run by either:
- Navigating to the file through the File Explorer in Visual Studio Code.
- Using the terminal to navigate to the directory containing your JavaScript file and opening it with **`code filename.js`**.
1. **Integrated Terminal:**
Open the integrated terminal in Visual Studio Code:
- Press **`Ctrl +`** (backtick) to open the terminal.
- Alternatively, go to **`View`** > **`Terminal`** from the menu.
1. **Navigate to the File's Directory:**
If you're not already in the directory containing your JavaScript file, use the **`cd`** command to navigate to the appropriate directory.

### Run the File

1. **Clone the Repository:**
    
    ```jsx
    
    git clone https://github.com/your-username/firefly-grid-simulation.git
    
    ```
    
2. **Navigate to the Code Directory:**
    
    ```jsx
    
    cd firefly-grid-simulation
    
    ```
    
3. **Run the Simulation:**
Execute the following command in your terminal to initiate the simulation:
    
    ```jsx
    
    firefly_grid_simulation.js
    
    ```
    
4. **Observe the Firefly:**
The program will display the movement of a firefly (*) within the grid. Enjoy watching its path!

## **Customization**

You have the flexibility to customize certain aspects of the simulation according to your preferences.

### **Grid Size**

Adjust the grid size by modifying the constants **`ROW`** and **`COL`** in the code file (firefly_grid_simulation.js). For example:

```jsx
javascriptCopy code
const ROW = 10; // Number of rows in the grid
const COL = 15; // Number of columns in the grid

```

### **Firefly Movement Speed**

Change the speed of the firefly's movement by adjusting the **`setTimeout`** delay in the code file (firefly_grid_simulation.js). The delay is specified in milliseconds. For example:

```jsx
javascriptCopy code
setTimeout(moveFirefly, 200); // Adjust the delay to control the movement speed (200 milliseconds in this example)

```

Feel free to experiment with these parameters to enhance your simulation experience.

## License 🖼️

This project is licensed under the **[MIT License](https://chat.openai.com/c/LICENSE)**. Feel free to modify, distribute, or use the codebase according to the terms of the license.

👉 **Have a question?** Click the `?` at the bottom right for more guides, or to send us a message.
