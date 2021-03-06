// Type definitions for jsoneditor-for-react 0.0
// Project: https://github.com/mixj93/jsoneditor-for-react#readme
// Definitions by: JoshGoldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import JSONEditor, { JSONEditorOptions } from "jsoneditor";

export interface ReactJsonEditorProps {
    values: {};
}

export default class ReactJsoneditor extends React.Component<ReactJsonEditorProps> {
    private editor?: JSONEditor;
    private options?: JSONEditorOptions;
}
