import styles from "./styles.module.scss";
interface subscripeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: subscripeButtonProps) {
  return (
    <button className={styles.subscribeButton} type="button">
      Subscribe bow
    </button>
  );
}
