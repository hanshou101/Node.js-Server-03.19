import React = require("react");

export default class HoverPic extends React.Component {
    render() {

        var my_width = this.props['my_width']
        var my_height = this.props['my_height']
        var picA = this.props['picA']
        var picB = this.props['picB']



        return (

            <div style={{
                width: my_width,
                height: my_height,
                position: "relative"
            }}>



                <img src={picA} alt="底层图" width={my_width} height={my_height} />

                <div style={{
                    width: my_width,
                    height: my_height,
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999,
                }}>

                    <img src={picB} alt="遮罩图" width="96px" height="96px" style={{ opacity: 0.4 }} />

                </div>


            </div>
        )
    }
}