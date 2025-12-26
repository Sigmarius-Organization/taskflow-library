// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
	this.priority = 'medium';
        this.labels = [];
    }

    setPriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
            return true;
        }
        return false;
	this.labels = [];
    }

    addLabel(label) {
        if (label && !this.labels.includes(label)) {
            this.labels.push(label);
        }
    }

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
}

module.exports = Task;
