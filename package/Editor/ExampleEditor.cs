using UnityEditor;
using UnityPackageExample;

namespace UnityPackageExampleEditor {

    [CustomEditor(typeof(Example))]
    public class ExampleEditor : Editor {
        /// <inheritdoc/>
        public override void OnInspectorGUI() {
            base.OnInspectorGUI();
        }
    }
}
