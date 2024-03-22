function Insert({onInsert}) {
    return (<form onSubmit={onInsert}>
        <input name="text" /><button type="submit">등록</button>
    </form>)
}
export default Insert