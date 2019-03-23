import React, { Component, Fragment } from "react"

class Body extends Component {
    render() {
        const { items } = this.props;
        const result = items.map((item) => {
            const { category, type, content } = item
            switch (category) {
                // normal components
                case "paragraph":
                    return this.paragraph(content)
                case "video":
                    return this.video(content)
                case "member":
                    return this.member(content)
                case "input":
                    return this.input(content)

                // container
                case "container":
                    return this.container(content)

                default:
                    return
            }
        })
        return (
            <Fragment>
                {result}
            </Fragment>
        )
    }

    paragraph = (content) => {
        return (
            <div class="paragraph">
                <p>{content}</p>
            </div>
        )
    }

    video = (content) => {
        const { src, description } = content
        const width = window.width * 0.4
        const height = window.height * 0.4
        return (
            <div class="video">
                <iframe width={width} height={height} src={src}>
                </iframe>
                <p>{description}</p>
            </div>
        )
    }

    member = (content) => {
        const {src, description} = content;
        return (
            <div class="member">
                     'pl,jh  '
            </div>
        )
    }

    input = (content) => {

    }

    paragraph = (content) => {

    }
}