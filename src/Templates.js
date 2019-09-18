class Template extends Component {
    render() {
      return (
        <div>
          <h1>Mi Super Aplicación</h1>
          {this.props.children}
        </div>
      );
    }
  }

  export default Template;