import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import bytesConversion from "../../_helpers/bytes-conversion";
import truncateMidString from "../../_helpers/truncate-mid-string";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import styled from "../../styled";
import { colors, misc } from "../../tokens";
import { spacing } from "../../tokens/v2";
import { StyledInput } from "../_styled-input";
import Spinner from "../spinner";

export type FileInputSize = "default" | "large" | "small" | "compressed";

export type FileInputFile = {
  name: string;
  size: number;
};

export type FileInputItem = {
  file: FileInputFile;
  loading?: boolean;
};

export interface IFileInputProps {
  /** HTML ID for the element */
  id?: string;
  /** HTML name for the element */
  name?: string;
  /** Make input readOnly if it does not validate constraint */
  readOnly?: boolean;
  /** Pass hasError to show error state */
  hasError?: boolean;
  /** @deprecated:hasError Pass error string directly to show error state */
  error?: string;

  onChange?: Function;
  /** disabled state */
  disabled?: boolean;
  /** accept state */
  accept?: string[];
  /** items state */
  items: Array<FileInputItem>;
  /** items state */
  multiple?: boolean;

  renderItem?: Function;
}

class FileInput extends React.Component<IFileInputProps> {
  public static formatBytes = bytesConversion;
  public static Element = styled.div``;
  public static Button = styled(Button)``;

  public static Spinner = styled(Spinner)`
    margin-right: ${spacing.xxsmall};
  `;

  public static Container = styled.div`
    position: relative;
  `;
  public static Input = styled.input`
    position: relative;
    z-index: 2;
    width: 100%;
    height: ${misc.button.default.height};
    margin: 0;
    opacity: 0;
  `;
  public static Label = styled.label`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height: ${misc.button.default.height};
    border-color: yellow;
  `;

  public static Text = styled.span`
    display: block;
    flex-grow: 1;
    margin-left: 12px;
    overflow: hidden;
    /* centering with line height because of the ellipse */
    line-height: ${misc.button.default.height};
    align-items: center;
    color: black;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  public static List = styled.ul`
    margin-top: ${spacing.xsmall};
  `;

  public static ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    padding-top: ${spacing.xsmall};
    padding-bottom: ${spacing.xsmall};
  `;

  public static ListItemBody = styled.div`
    display: flex;
    align-items: center;
  `;

  public static FileName = styled.span`
    margin-left: ${spacing.xsmall};
  `;

  public static FileNameWeight = styled.span`
    margin-left: 12px;
    color: ${colors.text.secondary};
  `;

  public static Card = styled.div`
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    padding: ${spacing.small};
  `;
  public static defaultProps = {
    multiple: false,
  };

  public onChangeHandler = (event) => {
    const items = Array.from(event.target.files).map((item) => ({ file: item, loading: false }));

    if (this.props.onChange) {
      this.props.onChange({ added: items });
    }
  };

  public onDeleteHandler = (index) => {
    if (this.props.onChange) {
      this.props.onChange({ deleted: { index, file: this.props.items[index] } });
    }
  };

  public render() {
    const { multiple, items: selectedItems, disabled, accept } = this.props;

    return (
      <FileInput.Element {...Automation("file-input")} {...this.props}>
        <FileInput.Container>
          <FileInput.Input
            disabled={disabled}
            type="file"
            multiple={multiple}
            onChange={this.onChangeHandler}
            accept={accept}
            {...Automation("file-input.input")}
          />
          <FileInput.Label htmlFor="customFileLong">
            <FileInput.Button disabled={disabled} icon="plus">
              Choose File
            </FileInput.Button>
            {selectedItems && (
              <FileInput.Text>
                {selectedItems.length === 0 ? "No" : selectedItems.length} file
                {selectedItems.length === 1 ? "" : "s"} selected
              </FileInput.Text>
            )}
          </FileInput.Label>
        </FileInput.Container>

        <FileInput.List {...Automation("file-input.list")}>
          {selectedItems &&
            selectedItems.map((item, itemIndex) => {
              const file = item.file;
              const deleteFileHandler = () => this.onDeleteHandler(itemIndex);

              if (this.props.renderItem) {
                return this.props.renderItem(item, itemIndex, deleteFileHandler);
              }

              return (
                <FileInput.ListItem key={file.name} {...Automation("file-input.list-item")}>
                  <FileInput.ListItemBody>
                    {item.loading ? (
                      <FileInput.Spinner />
                    ) : (
                      <Icon name="attachment" color={colors.text.secondary} size={18} />
                    )}

                    <FileInput.FileName>{truncateMidString(file.name)}</FileInput.FileName>
                    <FileInput.FileNameWeight>{bytesConversion(file.size)}</FileInput.FileNameWeight>
                  </FileInput.ListItemBody>
                  <FileInput.Button
                    icon="delete"
                    size="small"
                    appearance="link"
                    label={item.loading ? "" : "Remove"}
                    onClick={deleteFileHandler}
                    disabled={item.loading}
                  />
                </FileInput.ListItem>
              );
            })}
        </FileInput.List>
      </FileInput.Element>
    );
  }
}

export default FileInput;
export { StyledInput };
