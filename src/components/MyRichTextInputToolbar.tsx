import { ToggleButton } from "@mui/material";
import {
  useTiptapEditor,
  RichTextInputToolbar,
  LevelSelect,
  FormatButtons,
  AlignmentButtons,
  ListButtons,
  LinkButtons,
  QuoteButtons,
  ColorButtons,
} from "ra-input-rich-text";
import ImageIcon from "@mui/icons-material/Image";

import { create } from "ipfs-http-client";

const client = create({
  url: "https://store2.wushiyingshi.cyou/api/v0/",
});

export const MyRichTextInputToolbar = ({ size, ...props }: any) => {
  const editor = useTiptapEditor();

  return (
    <RichTextInputToolbar {...props}>
      <LevelSelect size={size} />
      <FormatButtons size={size} />
      <AlignmentButtons size={size} />
      <ListButtons size={size} />
      <LinkButtons size={size} />
      <QuoteButtons size={size} />
      <ColorButtons size={size} />
      <ToggleButton
        size={size}
        {...props}
        disabled={!editor?.isEditable}
        value="image"
        component={"label"}
      >
        <input
          onChange={async (event: any) => {
            const files = event.target.files;
            console.log("file changed", files);
            for (let index = 0; index < files.length; index++) {
              const file = files[index];
              const fileRlt = await client.add(file);

              editor
                .chain()
                .focus()
                .setImage({
                  src:
                    "https://store2.wushiyingshi.cyou/ipfs/" +
                    fileRlt.cid.toString(),
                  alt: file.name,
                })
                .run();
            }

            event.target.value = "";
          }}
          accept="image/*"
          multiple={true}
          type="file"
          hidden
        />
        <ImageIcon fontSize="inherit" />
      </ToggleButton>
    </RichTextInputToolbar>
  );
};
