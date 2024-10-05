# TO-DO
Here’s a simple description for your GitHub README that describes the functionality of your to-do list project, including the key aspects of the CSS for aligning the delete button:

---

# Simple To-Do List App

This project is a simple To-Do list web application built with HTML, CSS, and JavaScript. Users can add tasks, mark them as completed, and delete them. The tasks are stored in `localStorage`, so they persist even after the browser is refreshed.

### Features:
- **Add Tasks**: Enter a task in the input field and click the "Add Task" button to add it to your to-do list.
- **Mark as Completed**: Click on a task to toggle its completion status. Completed tasks will have a strikethrough effect.
- **Delete Tasks**: Use the "Delete" button next to each task to remove it from the list.
- **Local Storage**: All tasks are saved in the browser's `localStorage`, ensuring they are available after refreshing the page.

### Key CSS Adjustments:
- **Responsive Design**: The app is fully responsive, adapting to different screen sizes, from mobile phones to tablets and desktops.
- **Aligned Delete Button**: The "Delete" button is always aligned to the right of the task, regardless of the task's text length. This was achieved using `position: absolute` to pin the button to the right and `max-width` to prevent the task text from overlapping with the button.
- **Flexbox Layout**: The tasks are displayed using a flexbox layout to ensure proper alignment of task text and buttons.

### How to Use:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-todo-list.git
   ```
2. Open the `index.html` file in your browser.
3. Add, complete, or delete tasks using the provided interface.

