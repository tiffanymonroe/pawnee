import React, { Component } from 'react';

class Disclaimer extends Component {
  render(){
    return(
      <div className="container-fluid">
        <footer className="footer">
        Made with <i class="fas fa-coffee"></i> by <a href="http://tiffanymonroe.com">Tiffany Monroe</a>
        <br/>This is a class project. All content belongs to <a href="https://www.nbcuniversal.com/">NBC Universal</a>.
        </footer>
      </div>
    )
  }
}

export default Disclaimer
