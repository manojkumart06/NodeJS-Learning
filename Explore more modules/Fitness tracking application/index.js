import events from "events";

class FitnessTracker extends events.EventEmitter {
  constructor() {
    super();
    this.progress = 0;
    this.goal = 1000;
  }

  addExercise(exercise) {
    // Update progress
    this.progress += exercise.caloriesBurned;
  }

  checkGoalStatus() {
    // Check if goal is reached
    if (this.progress >= this.goal) {
      // Emit 'goalReached' event
      this.emit('goalReached');
    } else {
      // Emit 'goalnotReached' event
      this.emit('goalnotReached');
    }
  }
}

const Solution = () => {
  const tracker = new FitnessTracker();

  // Define a listener that sends a congratulatory message to the user upon reaching their fitness goal
  tracker.addListener('goalReached', () => {
    console.log("Congratulations! You have reached your fitness goal.");
  });

  // Define a listener that notifies the user when the goal is not reached
  tracker.addListener('goalnotReached', () => {
    console.log("You have not reached your fitness goal yet.");
  });

  // Simulate adding exercises
  tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });

  // Check the goal status after all exercises are added
  tracker.checkGoalStatus();
};

Solution();

export { FitnessTracker, Solution };
