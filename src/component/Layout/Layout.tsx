import classes from './Layout.module.css';

export const Layout: React.FC = (props) => {
  return (
    <>
      <div>Toolbar, SideDraw, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </>
  )
}