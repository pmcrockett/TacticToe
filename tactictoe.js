// Returns svg icon data.
const symbol = (function() {
    const template = document.querySelector("#symbol-svg");
    
    const str = [
        // X
        "M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z",
        // O
        "M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z",
        // Atom
        "M12,11A1,1 0 0,1 13,12A1,1 0 0,1 12,13A1,1 0 0,1 11,12A1,1 0 0,1 12,11M4.22,4.22C5.65,2.79 8.75,3.43 12,5.56C15.25,3.43 18.35,2.79 19.78,4.22C21.21,5.65 20.57,8.75 18.44,12C20.57,15.25 21.21,18.35 19.78,19.78C18.35,21.21 15.25,20.57 12,18.44C8.75,20.57 5.65,21.21 4.22,19.78C2.79,18.35 3.43,15.25 5.56,12C3.43,8.75 2.79,5.65 4.22,4.22M15.54,8.46C16.15,9.08 16.71,9.71 17.23,10.34C18.61,8.21 19.11,6.38 18.36,5.64C17.62,4.89 15.79,5.39 13.66,6.77C14.29,7.29 14.92,7.85 15.54,8.46M8.46,15.54C7.85,14.92 7.29,14.29 6.77,13.66C5.39,15.79 4.89,17.62 5.64,18.36C6.38,19.11 8.21,18.61 10.34,17.23C9.71,16.71 9.08,16.15 8.46,15.54M5.64,5.64C4.89,6.38 5.39,8.21 6.77,10.34C7.29,9.71 7.85,9.08 8.46,8.46C9.08,7.85 9.71,7.29 10.34,6.77C8.21,5.39 6.38,4.89 5.64,5.64M9.88,14.12C10.58,14.82 11.3,15.46 12,16.03C12.7,15.46 13.42,14.82 14.12,14.12C14.82,13.42 15.46,12.7 16.03,12C15.46,11.3 14.82,10.58 14.12,9.88C13.42,9.18 12.7,8.54 12,7.97C11.3,8.54 10.58,9.18 9.88,9.88C9.18,10.58 8.54,11.3 7.97,12C8.54,12.7 9.18,13.42 9.88,14.12M18.36,18.36C19.11,17.62 18.61,15.79 17.23,13.66C16.71,14.29 16.15,14.92 15.54,15.54C14.92,16.15 14.29,16.71 13.66,17.23C15.79,18.61 17.62,19.11 18.36,18.36Z",
        // Axe
        "M21.47 12.43C19.35 14.55 15.82 13.84 15.82 13.84V9.6L3.41 22L2 20.59L14.4 8.18H10.16C10.16 8.18 9.45 4.65 11.57 2.53C13.69 .406 17.23 1.11 17.23 1.11V5.36L17.94 4.65L19.35 6.06L18.64 6.77H22.89C22.89 6.77 23.59 10.31 21.47 12.43Z",
        // Baguette
        "M5 22C3.68 22 3.15 19.64 3.04 18.7A5.56 5.56 0 0 1 3.36 16A2.5 2.5 0 0 1 5.23 14.38C6.4 14.18 7.23 14.88 8.29 15.12A1.21 1.21 0 0 0 9.85 13.75C9.41 12.03 6.28 12 5 12C5 10.14 7.04 9.9 8.5 10.04A10.8 10.8 0 0 1 11.04 10.6C11.54 10.77 12.12 11.2 12.67 11.16C13.5 11.09 13.67 10.23 13.31 9.6C12.44 8.12 9.97 8 8.5 8C8.5 6 10.23 5.62 11.89 5.92A11.58 11.58 0 0 1 14.38 6.71C14.89 6.93 15.5 7.35 16.06 7.16C17.5 6.72 16 5.18 15.36 4.81A6.6 6.6 0 0 0 13.94 4.23C13.4 4.07 12.74 4.13 13.23 3.5A5.13 5.13 0 0 1 15.96 2.26C17.85 1.82 20.46 1.74 20.92 4.12A5.3 5.3 0 0 1 20.07 7.7A38.96 38.96 0 0 1 13.22 16.33A36.6 36.6 0 0 1 8.62 20.32C7.62 21.04 6.3 22 5 22Z",
        // Spade
        "M12,2C9,7 4,9 4,14C4,16 6,18 8,18C9,18 10,18 11,17C11,17 11.32,19 9,22H15C13,19 13,17 13,17C14,18 15,18 16,18C18,18 20,16 20,14C20,9 15,7 12,2Z",
        // Cat
        "M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z",
        // Pawn
        "M19 22H5V20H19V22M16 18H8L10.18 10H8V8H10.72L10.79 7.74C10.1 7.44 9.55 6.89 9.25 6.2C8.58 4.68 9.27 2.91 10.79 2.25C12.31 1.58 14.08 2.27 14.74 3.79C15.41 5.31 14.72 7.07 13.2 7.74L13.27 8H16V10H13.82L16 18Z",
        // Cupcake
        "M12,1.5A2.5,2.5 0 0,1 14.5,4A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 9.5,4A2.5,2.5 0 0,1 12,1.5M15.87,5C18,5 20,7 20,9C22.7,9 22.7,13 20,13H4C1.3,13 1.3,9 4,9C4,7 6,5 8.13,5C8.57,6.73 10.14,8 12,8C13.86,8 15.43,6.73 15.87,5M5,15H8L9,22H7L5,15M10,15H14L13,22H11L10,15M16,15H19L17,22H15L16,15Z",
        // Dog
        "M18,4C16.29,4 15.25,4.33 14.65,4.61C13.88,4.23 13,4 12,4C11,4 10.12,4.23 9.35,4.61C8.75,4.33 7.71,4 6,4C3,4 1,12 1,14C1,14.83 2.32,15.59 4.14,15.9C4.78,18.14 7.8,19.85 11.5,20V15.72C10.91,15.35 10,14.68 10,14C10,13 12,13 12,13C12,13 14,13 14,14C14,14.68 13.09,15.35 12.5,15.72V20C16.2,19.85 19.22,18.14 19.86,15.9C21.68,15.59 23,14.83 23,14C23,12 21,4 18,4M4.15,13.87C3.65,13.75 3.26,13.61 3,13.5C3.25,10.73 5.2,6.4 6.05,6C6.59,6 7,6.06 7.37,6.11C5.27,8.42 4.44,12.04 4.15,13.87M9,12A1,1 0 0,1 8,11C8,10.46 8.45,10 9,10A1,1 0 0,1 10,11C10,11.56 9.55,12 9,12M15,12A1,1 0 0,1 14,11C14,10.46 14.45,10 15,10A1,1 0 0,1 16,11C16,11.56 15.55,12 15,12M19.85,13.87C19.56,12.04 18.73,8.42 16.63,6.11C17,6.06 17.41,6 17.95,6C18.8,6.4 20.75,10.73 21,13.5C20.75,13.61 20.36,13.75 19.85,13.87Z",
        // Duck
        "M8.5,5A1.5,1.5 0 0,0 7,6.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 10,6.5A1.5,1.5 0 0,0 8.5,5M10,2A5,5 0 0,1 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z",
        // Gamepad
        "M21,6H3A2,2 0 0,0 1,8V16A2,2 0 0,0 3,18H21A2,2 0 0,0 23,16V8A2,2 0 0,0 21,6M21,16H3V8H21M6,15H8V13H10V11H8V9H6V11H4V13H6M14.5,12A1.5,1.5 0 0,1 16,13.5A1.5,1.5 0 0,1 14.5,15A1.5,1.5 0 0,1 13,13.5A1.5,1.5 0 0,1 14.5,12M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9Z",
        // Jellyfish
        "M19.5,14.5C18.92,14.43 18.43,14.92 18.5,15.5C18.5,16.17 17.5,16.17 17.5,15.5V13.2L19.2,12.7C19.92,12.36 20.41,11.68 20.5,10.9C20.5,5.5 16.7,2 12,2C7.3,2 3.5,5.5 3.5,10.9C3.56,11.7 4.06,12.4 4.8,12.7L6.5,13.2V15.5A0.5,0.5 0 0,1 6,16A0.5,0.5 0 0,1 5.5,15.5C5.57,14.92 5.08,14.43 4.5,14.5C3.92,14.43 3.43,14.92 3.5,15.5C3.44,16.91 4.59,18.06 6,18C7.41,18.06 8.56,16.91 8.5,15.5V13.7H9.5V19.4C9.5,20.07 8.5,20.07 8.5,19.4C8.57,18.82 8.08,18.33 7.5,18.4C6.92,18.33 6.43,18.82 6.5,19.4C6.38,20.84 7.55,22.07 9,22C10.41,22.06 11.56,20.91 11.5,19.5V14H12.5V19.5C12.44,20.91 13.59,22.06 15,22C16.41,22.06 17.56,20.91 17.5,19.5C17.5,18.17 15.5,18.17 15.5,19.5C15.5,20.17 14.5,20.17 14.5,19.5V13.8H15.5V15.6C15.5,16.96 16.63,18.06 18,18C19.41,18.06 20.56,16.91 20.5,15.5C20.57,14.92 20.08,14.43 19.5,14.5M10.6,4.7C9.09,5.03 7.79,5.97 7,7.3C6.83,7.5 6.5,7.57 6.3,7.4C6.08,7.23 6.04,6.92 6.2,6.7C7.16,5.19 8.67,4.12 10.4,3.7C10.67,3.68 10.91,3.85 11,4.1C11.06,4.37 10.88,4.65 10.6,4.7Z",
        // Splat
        "M18.14 16.7C17.23 18.21 16.08 17.73 15 17.09S12.9 15.68 12.25 16.59C11.54 17.37 12.09 18.62 12.37 19.72C12.65 20.83 12.67 21.79 10.9 22C9.5 21.81 9.58 20.65 9.81 19.42C10.04 18.19 10.4 16.89 9.5 16.43C8.78 15.95 8.28 16.78 7.65 17.6C7 18.41 6.26 19.2 5.04 18.62C3.94 17.71 4.36 17.18 4.94 16.5S6.27 14.91 5.84 13.31C5.66 12.66 4.76 12.81 3.87 12.79C3 12.77 2.12 12.59 2.03 11.29C1.96 10.5 2.55 10.18 3.16 9.93C3.78 9.68 4.41 9.5 4.42 8.87C4.45 8.26 4.04 7.83 3.78 7.38S3.41 6.46 4.03 5.76C5.08 4.9 5.92 5.63 6.76 6.42S8.43 8.04 9.46 7.39C10.28 6.85 9.53 5.9 8.95 4.97S7.96 3.15 9.46 2.74C10.76 2.38 11.26 3.27 11.71 4.3C12.17 5.33 12.57 6.5 13.67 6.71C15.24 7 16.38 5.16 17.47 3.7S19.63 1.15 21 2.95C22.5 4.84 21.07 5.72 19.4 6.5C17.73 7.23 15.81 7.87 16.27 9.28C16.54 10.1 17.42 9.65 18.35 9.34C19.27 9.03 20.26 8.86 20.74 10.27C21.25 11.76 20.04 12.1 18.68 12.24C17.32 12.38 15.8 12.32 15.7 13C15.59 13.71 16.5 14 17.29 14.42C18.08 14.85 18.75 15.42 18.14 16.7M20.5 19C19.55 19 19.06 18.26 19.06 17.5C19.06 16.74 19.54 16 20.5 16C21.5 16 22 16.74 22 17.5C22 18.26 21.5 19 20.5 19Z",
        // Mushroom
        "M4,12H20C20,8.27 17.44,5.13 14,4.25C13.86,5.24 13,6 12,6C11,6 10.14,5.24 10,4.25C6.56,5.13 4,8.27 4,12M12,2A10,10 0 0,1 22,12A2,2 0 0,1 20,14H4A2,2 0 0,1 2,12A10,10 0 0,1 12,2M13.5,17H10.5L9.92,19L9.65,20H14.35L14.08,19L13.5,17M15,15L16,18.5L16.27,19.45L16.35,20C16.35,21.1 15.45,22 14.35,22H9.65L9.17,21.94C8.1,21.66 7.45,20.57 7.73,19.5L8,18.5L9,15H15M16,7A2,2 0 0,1 18,9A2,2 0 0,1 16,11A2,2 0 0,1 14,9A2,2 0 0,1 16,7M8,7A2,2 0 0,1 10,9A2,2 0 0,1 8,11A2,2 0 0,1 6,9A2,2 0 0,1 8,7Z",
        // Skull and crossbones
        "M15.8,18.5L21.8,20.1L21.4,22L12,19.5L2.6,22L2.1,20.1L8.1,18.5L2,16.9L2.5,15L11.9,17.5L21.3,15L21.8,16.9L15.8,18.5M9.5,6C8.7,6 8,6.7 8,7.5C8,8.3 8.7,9 9.5,9C10.3,9 11,8.3 11,7.5C11,6.7 10.3,6 9.5,6M14.5,6C13.7,6 13,6.7 13,7.5C13,8.3 13.7,9 14.5,9C15.3,9 16,8.3 16,7.5C16,6.7 15.3,6 14.5,6M13,11L12,9L11,11H13M12,1C8.1,1 5,4.1 5,8C5,9.9 5.8,11.6 7,12.9V16H17V12.9C18.2,11.6 19,9.9 19,8C19,4.1 15.9,1 12,1M15,12V14H14V12H13V14H11V12H10V14H9V12H9C7.8,11.1 7,9.7 7,8C7,5.2 9.2,3 12,3C14.8,3 17,5.2 17,8C17,9.6 16.2,11.1 15,12Z",
        // Note
        "M18 7V3H12V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V11H18V8H14V7H18Z",
        // Pirate
        "M8.2,12.1C7.9,12.3 7.7,12.7 7.8,13C7.8,13.7 8.5,14.2 9.1,14.2C9.7,14.2 10.3,13.7 10.3,13C9.7,12.6 9,12.3 8.2,12.1M22,11L23,7C23,7 21,7 18,5C15,3 15,1 12,1C9,1 9,3 6,5C3,7 1,7 1,7L2,11H2.1C2,11.3 2,11.7 2,12C2,15.5 3.8,18.6 6.5,20.4L6,21.3C12.4,25.4 18,21.3 18,21.3L17.5,20.4C20.2,18.6 22,15.5 22,12C22,11.7 22,11.3 22,11M11.3,4.5L9.9,3.1L10.6,2.4L12,3.8L13.4,2.4L14.1,3.1L12.7,4.5L14.1,5.9L13.4,6.6L12,5.2L10.6,6.6L9.9,5.9L11.3,4.5M9.3,8.5C10.3,8.2 11.3,8 12,8C14.2,8 17.9,9.6 19.8,10.4C19.9,10.7 19.9,11 19.9,11.3L9.3,8.5M13.6,19.1C12.9,19.5 12.2,19.8 11.4,19.9C10.9,19.5 10.9,18.7 11.4,18.3C11.8,17.9 12.7,17.7 13.2,18.2C13.5,18.3 13.6,18.8 13.6,19.1M20,13.4C19.5,15.5 18.2,17.4 16.5,18.6L15,16H9L7.5,18.6C5.4,17.2 4,14.8 4,12C4,11.5 4.1,11 4.2,10.5C4.7,10.3 5.3,10 6,9.7L13.1,11.6V14C13.1,14.5 13.5,15 14.1,15H16.1C16.6,15 17.1,14.6 17.1,14V12.6L20,13.4Z",
        // Rabbit
        "M17 14C16.76 13.76 16.56 13.5 16.35 13.25C17.5 11.5 19 8.56 19 5C19 3.05 18.26 2 17 2C15.46 2 13.04 4.06 12 7.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5C5 8.56 6.5 11.5 7.65 13.25C7.44 13.5 7.24 13.76 7 14C6.75 14.25 5 15.39 5 17.5C5 20 7 22 9.5 22C11 22 12 21.5 12 21.5S13 22 14.5 22C17 22 19 20 19 17.5C19 15.39 17.25 14.25 17 14M16.88 4.03C16.94 4.2 17 4.5 17 5C17 7.84 15.89 10.24 14.93 11.78C14.55 11.5 14.1 11.3 13.53 11.16C13.77 6.64 15.97 4.33 16.88 4.03M7 5C7 4.5 7.06 4.2 7.12 4.03C8.03 4.33 10.23 6.64 10.5 11.16C9.9 11.3 9.45 11.5 9.08 11.78C8.11 10.24 7 7.84 7 5M14.5 20C13.5 20 12.7 19.67 12.28 19.44C12.7 19.26 13 18.73 13 18.5C13 18.22 12.55 18 12 18S11 18.22 11 18.5C11 18.73 11.3 19.26 11.72 19.44C11.3 19.67 10.5 20 9.5 20C8.12 20 7 18.88 7 17.5C7 16.8 7.43 16.26 8 15.77C8.44 15.41 8.61 15.25 9.3 14.4C10.06 13.45 10.39 13 12 13S13.94 13.45 14.7 14.4C15.39 15.25 15.56 15.41 16 15.77C16.57 16.26 17 16.8 17 17.5C17 18.88 15.88 20 14.5 20M14 16C14 16.41 13.78 16.75 13.5 16.75S13 16.41 13 16 13.22 15.25 13.5 15.25 14 15.59 14 16M11 16C11 16.41 10.78 16.75 10.5 16.75S10 16.41 10 16 10.22 15.25 10.5 15.25 11 15.59 11 16Z",
        // Mouse
        "M21.33 17.39C22.73 18.66 21.8 21 19.92 21H11.06C8.25 21 6 18.75 6 15.94V15.89C3.7 15.42 2 13.41 2 11C2 8.25 4.22 6 7 6H9.5C9.8 6 10 5.77 10 5.5S9.8 5 9.5 5H7V3H9.5C10.88 3 12 4.13 12 5.5C12 6.89 10.88 8 9.5 8H7C5.34 8 4 9.33 4 11C4 12.37 4.92 13.5 6.14 13.87C6.7 11.67 8.67 10 11.06 10C11.86 10 12.66 10.22 13.36 10.55C11.95 11.34 11 12.8 11 14.5C11 15.75 11.5 16.87 12.33 17.67L13.03 16.97C12.38 16.36 12 15.47 12 14.5C12 11.91 14.34 11 15.5 11C17.58 11 19.45 12.89 18.94 15.23L21.33 17.39M18 19C18.56 19 19 18.56 19 18S18.56 17 18 17 17 17.44 17 18 17.44 19 18 19Z",
        // Stormcloud
        "M6,16A5,5 0 0,1 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16H18A1,1 0 0,1 17,15A1,1 0 0,1 18,14H19A2,2 0 0,0 21,12A2,2 0 0,0 19,10H17V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11A3,3 0 0,0 6,14H7A1,1 0 0,1 8,15A1,1 0 0,1 7,16H6M12,11H15L13,15H15L11.25,22L12,17H9.5L12,11Z"
    ];

    const name = [
        "X",
        "O",
        "Atom",
        "Axe",
        "Baguette",
        "Spade",
        "Cat",
        "Pawn",
        "Cupcake",
        "Dog",
        "Duck",
        "Gamepad",
        "Jellyfish",
        "Splat",
        "Mushroom",
        "Skull and crossbones",
        "Note",
        "Pirate",
        "Rabbit",
        "Mouse",
        "Stormcloud"
    ];

    const getSymbolStr = function(_idx) {
        return str[_idx];
    };

    const getSymbolName = function(_idx) {
        return name[_idx];
    };

    const getSymbolCount = function() {
        return str.length;
    };

    const getSymbolSvg = function(_idx, _title) {
        const svg = template.content.cloneNode(true).querySelector("svg");
        let svgPath = svg.querySelector("path");

        if (typeof _idx == "number") {
            var str = getSymbolStr(_idx);
            _title = getSymbolName(_idx);
        } else {
            var str = _idx;
        }
        
        svgPath.setAttribute("d", str);
        let svgTitle = svg.querySelector("title");
        svgTitle.textContent = _title;

        return {
            svg,
            svgPath,
            svgTitle
        }
    };

    const getCancelSvg = function() {
        let svg = getSymbolSvg("M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z", 
            "Unvailable");
        svg.svg.classList.add("cancel");

        return svg;
    };

    const getBackSvg = function() {
        return getSymbolSvg("M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z", 
            "Back to menu");
    };

    const getLeftArrowSvg = function() {
        return getSymbolSvg(getLeftArrowStr(), 
            "Back to menu");
    };

    const getRightArrowSvg = function() {
        return getSymbolSvg(getRightArrowStr, 
            "Back to menu");
    };

    const getLeftArrowStr = function() {
        return "M21 10.5C21 14.64 17.64 18 13.5 18H11V22L4 16L11 10V14H13.5C15.43 14 17 12.43 17 10.5V3H21V10.5Z";
    };

    const getRightArrowStr = function() {
        return "M3 3H7V10.5C7 12.43 8.57 14 10.5 14H13V10L20 16L13 22V18H10.5C6.36 18 3 14.64 3 10.5V3Z";
    };

    const getHiVolStr = function() {
        return "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z";
    };

    const getMuteStr = function() {
        return "M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z";
    };

    return {
        getSymbolStr,
        getSymbolName,
        getSymbolCount,
        getSymbolSvg,
        getCancelSvg,
        getBackSvg,
        getLeftArrowSvg,
        getRightArrowSvg,
        getLeftArrowStr,
        getRightArrowStr,
        getHiVolStr,
        getMuteStr
    };
})();

// Handles all program DOM modifications.
const setHtml = (function() {
    const initBoardButtons = function(_board) {
        cell.forEach(e => {
            e.addEventListener("click", f => {clickBoardCell(e, _board)}, false);
        });

        playAgainButton.addEventListener("click", e => {
            audio.click1();
            _board.init();
        });

        backToMenuButton.forEach(b => {
            b.addEventListener("click", e => {clickBoardBack(_board)});
            
            if (b.classList.contains("scoreboard-button")) {
                let svg = symbol.getBackSvg();
                b.appendChild(svg.svg);
            }
        });
    };

    const initBoard = function() {
        messageDiv.classList.remove("unhidden");
        messageDiv.classList.add("hidden");
        boardDiv.classList.remove("game-over");
    };

    const clickBoardCell = function(_cell, _board) {
        if (_board.getCurrentPlayer().cpuLvl < 0) {
            _board.placeMarker(_board.getPlayerTurn(), Number(_cell.getAttribute("x")), 
                Number(_cell.getAttribute("y")));
        }
    };

    const clickBoardBack = function(_board) {
        _board.forceGameOver();
        removeBoardCellSymbols();
        audio.click1();
        window.setTimeout(function() {
            game.classList.remove("unhidden");
            game.classList.add("hidden");
            menu.classList.remove("hidden");
            menu.classList.add("unhidden");
        }, 250);
    };

    const removeBoardCellSymbols = function() {
        cell.forEach(e => {
            e.classList.remove("win");
            e.classList.add("selectable");
            let svg = e.querySelector("svg");

            if (svg) {
                svg.classList.add("symbol-removed");
            }
        });
    };

    const updatePlayer = function(_player, _plIdx) {
        _player.nameDiv = document.querySelector(`.name.pl${_plIdx}`);
        _player.nameDiv.textContent = _player.name;

        _player.scoreDiv = document.querySelector(`.score.pl${_plIdx}`);
        _player.iconDiv = document.querySelector(`.pl-svg.pl${_plIdx}`);

        let existingSvg = _player.iconDiv.querySelector("svg");

        if (existingSvg) {
            existingSvg.remove();
        }

        let bgSvg = symbol.getSymbolSvg(_player.symbolIdx);
        _player.iconDiv.appendChild(bgSvg.svg);
    };

    const updateScores = function(_players) {
        for (let i = 0; i < _players.length; i++) {
            _players[i].scoreDiv.textContent = _players[i].score;
        }
    };

    const startCpuTurn = function() {
        boardDiv.classList.add("cpu-turn");
    };

    const endCpuTurn = function() {
        boardDiv.classList.remove("cpu-turn");
    };

    const updatePlayerTurnArrow = function(_playerTurn, _player) {
        curPlayerDiv.textContent = "";
        let turnText = document.createTextNode(`${_player.name}'s`);
        curPlayerDiv.appendChild(turnText);
        curPlayerDiv.appendChild(document.createElement("br"));
        turnText = document.createTextNode(`turn`);
        curPlayerDiv.appendChild(turnText);

        if (_playerTurn) {
            var path = symbol.getRightArrowStr();
            arrowSvg.svg.classList.add("right"); 
        } else {
            var path = symbol.getLeftArrowStr();
            arrowSvg.svg.classList.remove("right");  
        }

        arrowSvg.svgPath.setAttribute("d", path);
    };

    const placePlayerBoardMarker = function(_x, _y, _player) {
        let moveCell = document.querySelector(`.x${_x}y${_y}`);
        let symbolSvg = symbol.getSymbolSvg(_player.symbolIdx).svg;
        moveCell.appendChild(symbolSvg);
        symbolSvg.classList.add("symbol-placed");

        symbolSvg.addEventListener("animationend", e => {
            if (symbolSvg.classList.contains("symbol-removed")) {
                symbolSvg.remove();
            }
        });

        moveCell.classList.remove("selectable");
    };

    const startGameOver = function(_winInfo, _lines, _player) {
        boardDiv.classList.add("game-over");
        window.setTimeout(showGameOver, 500, _winInfo, _lines, _player);
        window.setTimeout(audio.win, 250);
    };

    const showGameOver = function(_winInfo, _lines, _player) {
        messageDiv.classList.remove("hidden");
        messageDiv.classList.add("unhidden");

        if (_winInfo.length) {
            highlightWinLine(_winInfo, _lines);
            messageText.textContent = `${_player.name} wins!`;
        } else {
            messageText.textContent = "Stalemate!"
        }
    };

    const highlightWinLine = function(_winLine, _lines) {
        _winLine.forEach(e => {
            _lines[e].forEach(f => {
                let winCell = boardDiv.querySelector(`.x${f[0]}y${f[1]}`);
                winCell.classList.add("win");
            });
        });
    };

    const createMenuIconPane = function(_p0, _p1) {
        let pane = [];
        let cancelSvg = [
            symbol.getCancelSvg(),
            symbol.getCancelSvg()
        ];
        let player = [
            _p0,
            _p1
        ];

        for (let i = 0; i < 2; i++) {
            pane.push(document.querySelectorAll(`.icon-select.p${i} > .cell`));
    
            pane[i].forEach(function(e, j) {
                e.addEventListener("click", f => {clickPlayerIcon(pane, i, j, player[i],
                    cancelSvg)});
                e.appendChild(symbol.getSymbolSvg(j).svg);
            });
        }
        
        for (let i = 0; i < 2; i++) {
            pane[i].forEach(function(e, j) {
                if (j == player[i].symbolIdx) {
                    pane[1 - i][j].classList.add("other-selected");
                    pane[1 - i][j].appendChild(cancelSvg[1 - i].svg);
                    e.classList.add("selected");
                }
            });
        }
    
        return pane;
    };

    const clickPlayerIcon = function(_panes, _paneIdx, _iconIdx, _player,
            _cancelSvg) {
        if (!_panes[1 - _paneIdx][_iconIdx].classList.contains("selected")) {
            _panes[_paneIdx].forEach(g => {
                g.classList.remove("selected");
            });

            _panes[1 - _paneIdx].forEach(g => {
                g.classList.remove("other-selected");
            });

            _panes[_paneIdx][_iconIdx].classList.add("selected");
            _player.symbolIdx = _iconIdx;
            _panes[1 - _paneIdx][_iconIdx].classList.add("other-selected");
            _panes[1 - _paneIdx][_iconIdx].appendChild(_cancelSvg[1 - _paneIdx].svg);

            audio.click2();
        }
    };

    const createMenu = function(_p0, _p1) {
        createMenuIconPane(_p0, _p1);
        let player = [
            _p0,
            _p1
        ];
    
        for (let i = 0; i < 2; i++) {
            setupDiv.push(document.querySelector(`.setup.p${i}`));
            nameInput.push(document.getElementById(`name-p${i}`));
            playerTypeDiv.push(document.querySelector(`.player-type.p${i}`));
            playerTypeCell.push(document.querySelectorAll(`.player-type.p${i} > .cell`));
    
            playerTypeCell[i].forEach(function(c, j) {
                if (c.getAttribute("cpuLvl") == player[i].cpuLvl) {
                    c.classList.add("selected");
                }
    
                c.addEventListener("click", e => {
                    clickMenuPlayerType(playerTypeCell[i], j, player[i])
                });
            });

            nameInput[i].value = player[i].name;
            nameInput[i].addEventListener("input", e => {limitNameLength(nameInput[i], player[i])});
        }

        startCell.addEventListener("click", e => {clickMenuStart(player[0], player[1])});

        volRange.addEventListener("input", clickVol);
    };

    const clickMenuPlayerType = function(_cells, _cellIdx, _player) {
        _cells.forEach(f => {
            f.classList.remove("selected");
        });

        _cells[_cellIdx].classList.add("selected");
        _player.cpuLvl = _cells[_cellIdx].getAttribute("cpuLvl");

        audio.click2();
    };

    const clickMenuStart = function(_p0, _p1) {
        menu.classList.remove("unhidden");
        menu.classList.add("hidden");
        game.classList.remove("hidden");
        game.classList.add("unhidden");
        board.setPlayers(_p0, _p1);
        board.init(null, true);

        audio.click1();
    };

    const limitNameLength = function(_nameInput, _player) {
        if (_nameInput.value.length > 12) {
            _nameInput.value = _player.name
        } else {
            _player.name = _nameInput.value;
        }
    };

    const clickVol = function() {
        let vol = volRange.value;
        audio.setVol(vol);

        if (vol > 0) {
            volSvgPath.setAttribute("d", symbol.getHiVolStr());
        } else {
            volSvgPath.setAttribute("d", symbol.getMuteStr());
        }
    }

    // Menu
    const menu = document.querySelector(".menu");
    let setupDiv = [];
    let nameInput = [];
    let playerTypeDiv = [];
    let playerTypeCell = [];
    let startCell = document.querySelector(".start");
    const volRange = document.querySelector(".vol > input");
    const volSvgPath = document.querySelector(".vol > svg > path");

    // Board
    const game = document.querySelector(`.game`);
    let messageDiv = document.querySelector(".message");
    let messageText = messageDiv.querySelector(".text");
    let playAgainButton = messageDiv.querySelector(".play-again");
    let backToMenuButton = game.querySelectorAll(".back-to-menu");
    let curPlayerDiv = game.querySelector(".current-player");
    let curPlayerArrowDiv = game.querySelector(".current-player-arrow");
    let arrowSvg = symbol.getLeftArrowSvg();
    curPlayerArrowDiv.appendChild(arrowSvg.svg);
    const boardDiv = document.querySelector(".board");
    const cell = boardDiv.querySelectorAll(".cell");

    return {
        initBoardButtons,
        initBoard,
        removeBoardCellSymbols,
        updatePlayer,
        updateScores,
        startCpuTurn,
        endCpuTurn,
        updatePlayerTurnArrow,
        placePlayerBoardMarker,
        startGameOver,
        createMenu
    };
})();

const audio = (function() {
    const click1Snd = new Audio("./resources/Click1.wav");
    const click2Snd = new Audio("./resources/Click2.wav");
    const player1MoveSnd = new Audio("./resources/Player1Move.wav");
    const player2MoveSnd = new Audio("./resources/Player2Move.wav");
    const winSnd = new Audio("./resources/Win.wav");

    let vol = 0.5;

    const playSnd = function(_snd) {
        _snd.volume = vol;
        if (_snd.readyState >= 4) {
            _snd.load();
            _snd.play();
        }
    };

    const setVol = function(_vol) {
        vol = _vol;
    };

    const click1 = function() {playSnd(click1Snd)};
    const click2 = function() {playSnd(click2Snd)};
    const player1Move = function() {playSnd(player1MoveSnd)};
    const player2Move = function() {playSnd(player2MoveSnd)};
    const win = function() {playSnd(winSnd)};

    return {
        click1,
        click2,
        player1Move,
        player2Move,
        win,
        setVol
    };
})();

// Runs gameboard logic and ranks move desirability for CPU players.
const board = (function() {
    const init = function(_e, _resetScores) {
        if (_resetScores) {
            player[0].score = 0;
            player[1].score = 0;
            playerTurn = getFirstPlayer();
        }

        setHtml.updateScores(player);
        gameOver = false;
        turnIdx = 0;
        setHtml.removeBoardCellSymbols();
        setHtml.initBoard();
        space = [
            [ -1, -1, -1 ],
            [ -1, -1, -1 ],
            [ -1, -1, -1 ]
        ];
        possibleMoves = null;
        startNextTurn([]);
    };

    const setPlayers = function(_p0, _p1) {
        player[0] = _p0;
        player[1] = _p1;

        for (let i = 0; i < 2; i++) {
            player[i].board = this;
            player[i].playerIdx = i;

            setHtml.updatePlayer(player[i], i);
        }
        setHtml.updateScores(player);
    };

    const calcPossibleMoves = function(_cpuLvl) {
        let scoreArr = [
            [ 0, 0, 0 ],
            [ 0, 0, 0 ],
            [ 0, 0, 0 ]
        ]

        for (let x = 0; x < space.length; x++) {
            for (let y = 0; y < space[x].length; y++) {
                scoreArr[x][y] = checkMove(x, y, _cpuLvl)
            }
        }

        return scoreArr;
    };

    const getPossibleMoves = function() {
        return possibleMoves;
    };

    const checkMove = function(_xIdx, _yIdx, _cpuLvl) {
        const pos = [ _xIdx, _yIdx ];
        let winLine = [];

        if (space[_xIdx][_yIdx] < 0) {
            let score = 0;

            for (let i = 0; i < line.length; i++) {
                if (isSpaceInLine([ _xIdx, _yIdx ], line[i])) {
                    // +1 for each line the space could be in (on cpuLvl 2).
                    score += _cpuLvl < 2 ? 0 : 1;
                    const lineScore = getPlayerLineScore(playerTurn, 
                        getOtherPlayerIdx(playerTurn), i, _cpuLvl);
                    score += lineScore.score;
                    // If the move would result in a win, .winLine gives the
                    // index of the completed line(s) in the line array.

                    if (lineScore.winLine >= 0 && 
                            !winLine.includes(lineScore.winLine)) {
                        winLine.push(lineScore.winLine);
                    }
                }
            };

            return { pos, valid: true, score, winLine };
        }

        return { pos, valid: false, score: -1, winLine };
    };

    const isSpaceInLine = function(_space, _line) {
        for (let i = 0; i < _line.length; i++) {
            if (_space[0] == _line[i][0] && _space[1] == _line[i][1]) {
                return true;
            }
        }

        return false;
    };

    const getPlayerLineScore = function(_playerIdx, _opponentIdx, _lineIdx, _cpuLvl) {
        const l = line[_lineIdx];
        // Higher CPU levels prioritize winning over blocking you and are better
        // at recognizing when the final space in a line isn't worth filling.
        const plScoreVal = [
            0, // If the player doesn't have any marks in the line.
            _cpuLvl < 1 ? 1 : _cpuLvl < 2 ? 2 : 4, // One mark in the line.
            999 // Two marks in the line.
        ];
        const opScoreVal = [
            0, // If the opponent doesn't have any marks in the line.
            2, // Etc.
            _cpuLvl < 1 ? 6 : _cpuLvl < 2 ? 999 : 900
        ];
        let plScoreIdx = 0;
        let opScoreIdx = 0;

        // Tally each player's number of marks on the line.
        for (let i = 0; i < l.length; i++) {
            if (space[l[i][0]][l[i][1]] == _opponentIdx) {
                opScoreIdx++;
            } else if (space[l[i][0]][l[i][1]] == _playerIdx) {
                plScoreIdx++
            }
        }

        if (opScoreIdx == 1 && plScoreIdx == 1) {
            // Lower CPU levels are more eager to fill the last space in a line 
            // even with no clear benefit.
            return {
                score: _cpuLvl < 1 ? 3 : _cpuLvl < 2 ? 2 : 1,
                winLine: -1
            };
        } else {
            // At higher levels, CPU's line score is effectively weighted to
            // influence the decision more than the opponent's line score.
            return {
                score: opScoreVal[opScoreIdx] + plScoreVal[plScoreIdx],
                winLine: plScoreIdx >= 2 ? _lineIdx : -1
            };
        }
    };

    const getFirstPlayer = function() {
        playerTurn = Math.floor(Math.random() * 2);

        return playerTurn;
    };

    const getOtherPlayerIdx = function(_playerIdx) {
        return (_playerIdx + 1) % 2;
    };

    const startNextTurn = function(_winLine) {
        setHtml.endCpuTurn();
        gameOver = endGame(_winLine);

        if (!gameOver) {
            turnIdx++;
            playerTurn = getOtherPlayerIdx(playerTurn);
            setHtml.updatePlayerTurnArrow(playerTurn, getCurrentPlayer());
            let curPlayer = getCurrentPlayer();
            possibleMoves = calcPossibleMoves(curPlayer.cpuLvl);

            if (getCurrentPlayer().cpuLvl >= 0) {
                setHtml.startCpuTurn();
                window.setTimeout(getCurrentPlayer().promptCpuMove.bind(getCurrentPlayer()), 700);
            }
        }
    };

    const placeMarker = function(_playerIdx, _x, _y) {
        if (!gameOver && 
                possibleMoves[_x][_y].valid && 
                _playerIdx == playerTurn) {
            space[_x][_y] = _playerIdx;
            setHtml.placePlayerBoardMarker(_x, _y, getCurrentPlayer());
            
            if (_playerIdx) {
                audio.player2Move();
            } else {
                audio.player1Move();
            }

            startNextTurn(possibleMoves[_x][_y].winLine);
        }
    };

    const endGame = function(_winInfo) {
        if (gameOver) return true;

        if (_winInfo.length || (turnIdx >= 9)) {
            setHtml.startGameOver(_winInfo, line, getCurrentPlayer());

            // If not a stalemate
            if (_winInfo.length) {
                window.setTimeout(function() {
                    getCurrentPlayer().score++;
                }, 500);
            }

            return true;
        }

        return false;
    };

    const forceGameOver = function() {
        gameOver = true;
    };

    const logGrid = function() {
        console.log(`Player turn: ${playerTurn}   Turn number ${turnIdx}`);

        for (let y = 0; y < 3; y++) {
            console.log(`${space[0][y]} ${space[1][y]} ${space[2][y]}`);
        }
    };

    const getPlayerTurn = function() {
        return playerTurn;
    };

    const getCurrentPlayer = function() {
        return player[playerTurn];
    };

    const line = [
        [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ]],
        [ [ 0, 1 ], [ 1, 1 ], [ 2, 1 ]],
        [ [ 0, 2 ], [ 1, 2 ], [ 2, 2 ]],
        [ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ]],
        [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ]],
        [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ]],
        [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ]],
        [ [ 0, 2 ], [ 1, 1 ], [ 2, 0 ]]
    ];

    let player = [ null, null ];
    let playerTurn = 0;
    let turnIdx = 0;
    let possibleMoves = null;
    let gameOver = false;
    let space = null;

    return {
        checkMove,
        getFirstPlayer,
        startNextTurn,
        placeMarker,
        endGame,
        logGrid,
        setPlayers,
        getPossibleMoves,
        init,
        getPlayerTurn,
        getCurrentPlayer,
        forceGameOver
    }
})();

const createPlayer = function(_name, _symbolIdx, _cpuLvl) {
    let score = 0;
    let cpuLvl = _cpuLvl;
    let board = null;
    let playerIdx = null;
    let symbolIdx = _symbolIdx;
    let nameDiv = null;
    let scoreDiv = null;
    let iconDiv = null;
    
    const promptCpuMove = function() {
        if (this.board === null) {
            console.log("CPU board not found");
            console.log(this.board);
            return;
        }

        const cpuMove = getBestCpuMove(this.board.getPossibleMoves());
        this.board.placeMarker(this.playerIdx, cpuMove.pos[0], cpuMove.pos[1]);
    };
    // Randomly choose among the highest scoring moves.
    const getBestCpuMove = function(_possibleMoves) {
        let bestMoves = [];
        let move = null;

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (_possibleMoves[x][y].valid) {
                    if (!bestMoves.length || 
                            _possibleMoves[x][y].score > bestMoves[0].score) {
                        bestMoves = [ _possibleMoves[x][y] ];
                    } else if (_possibleMoves[x][y].score == bestMoves[0].score) {
                        bestMoves.push(_possibleMoves[x][y]);
                    }
                }
            }
        }

        if (bestMoves.length) {
            const idx = Math.floor(Math.random() * bestMoves.length);
            move = bestMoves[idx];
        }

        return move;
    };

    const checkName = function(_name) {
        if (_name.length > 12) {
            _name = _name.slice(0, 12);
        }

        return _name;
    };

    const name = checkName(_name);

    return {
        name,
        score,
        cpuLvl,
        board,
        playerIdx,
        symbolIdx,
        nameDiv,
        scoreDiv,
        iconDiv,
        promptCpuMove
    };
};

setHtml.createMenu(
    createPlayer("Player 1", 0, -1), 
    createPlayer("Player 2", 1, 0)
);
setHtml.initBoardButtons(board);