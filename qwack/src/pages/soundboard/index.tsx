import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/ButtonContainer";

export function SoundboardPage() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Soundboard</h1>
      <div>
        <Link to="/">Back to Homepage</Link>
      </div>
      <ButtonContainer>
        <Button
          onClick={() => console.log("Button clicked")}
          name="primaryButton"
          label="Primary Button"
          variant="primary"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />
        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button"
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow Button ssdsds dsds "
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="rainbowButton"
          label="Rainbow B asdas dasd asd s utton sssd asd "
          variant="rainbow"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="nsfwButton"
          label="NSFW Button"
          variant="nsfw"
        />

        <Button
          onClick={() => console.log("Button clicked")}
          name="darkButton"
          label="Dark Button"
          variant="dark"
        />
        <Button
          onClick={() => console.log("Button clicked")}
          name="darkButton"
          label="Dark Button"
          variant="dark"
        />
      </ButtonContainer>
    </div>
  );
}
