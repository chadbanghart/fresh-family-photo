import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    isPoster: false,
    error: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    const updatedValue =
      name === "isPoster" ? (value === "Job Poster" ? true : false) : value;
    this.setState({
      [name]: updatedValue,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password, isPoster } = this.state;
      const formData = { name, email, password, isPoster };
      const user = await signUp(formData);
      this.props.setUser(user);
      this.props.navigate("/");
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <label>User Type</label>
            <select
              name="isPoster"
              value={this.state.isPoster ? "Job Poster" : "Photographer"}
              onChange={this.handleChange}
              required
            >
              <option value="Photographer">Photographer</option>
              <option value="Job Poster">Job Poster</option>
            </select>
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
